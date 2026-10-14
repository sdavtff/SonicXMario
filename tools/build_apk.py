#!/usr/bin/env python3
"""
Builds Dash Kingdom 3D APKs without Gradle/Android Studio.

Pipeline: (web bundle) -> aapt2 compile/link -> javac -> dx -> zip + 4-byte align -> apksigner

Usage:
  python3 tools/build_apk.py                # debug + release APKs into dist/
  python3 tools/build_apk.py --skip-web     # reuse the existing assets/www bundle
  python3 tools/build_apk.py --toolchain DIR
Environment variables for the release key (defaults to keystore/release.jks):
  DK_RELEASE_KEYSTORE, DK_RELEASE_STOREPASS, DK_RELEASE_KEYALIAS, DK_RELEASE_KEYPASS
"""
import argparse
import os
import re
import shutil
import subprocess
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "android", "app", "src", "main")
BUILD = os.path.join(ROOT, "build", "apk")
DIST = os.path.join(ROOT, "dist")


def run(cmd, **kw):
    print("+", " ".join(cmd))
    subprocess.run(cmd, check=True, **kw)


def zipalign(src, dst, align=4):
    """Re-writes a zip so every STORED entry's data starts on an `align`-byte boundary
    (equivalent to `zipalign 4`), required for resources.arsc on Android 11+."""
    with zipfile.ZipFile(src) as zin, zipfile.ZipFile(dst, "w") as zout:
        for info in zin.infolist():
            data = zin.read(info.filename)
            ni = zipfile.ZipInfo(info.filename, date_time=(2026, 1, 1, 0, 0, 0))
            ni.compress_type = info.compress_type
            ni.external_attr = info.external_attr
            ni.create_system = 0
            if info.compress_type == zipfile.ZIP_STORED:
                offset = zout.fp.tell() + 30 + len(ni.filename.encode("utf-8"))
                pad = (align - offset % align) % align
                ni.extra = b"\0" * pad
            zout.writestr(ni, data)


def ensure_keystore(path, alias, storepass, keypass, dname):
    if os.path.exists(path):
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    run(["keytool", "-genkeypair", "-v", "-keystore", path, "-storetype", "JKS",
         "-alias", alias, "-keyalg", "RSA", "-keysize", "2048", "-validity", "10000",
         "-storepass", storepass, "-keypass", keypass, "-dname", dname])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--toolchain", default=os.path.join(ROOT, ".toolchain"))
    ap.add_argument("--skip-web", action="store_true")
    ap.add_argument("--only", choices=["debug", "release"], default=None)
    a = ap.parse_args()

    tc = a.toolchain
    aapt2 = os.path.join(tc, "aapt2")
    android_jar = os.path.join(tc, "android.jar")
    dx = os.path.join(tc, "dx.jar")
    apksigner = os.path.join(tc, "apksigner.jar")
    for f in (aapt2, android_jar, dx, apksigner):
        if not os.path.exists(f):
            sys.exit(f"Missing {f}. Run tools/fetch_toolchain.sh first.")

    # single source of truth: android/app/build.gradle
    gradle = open(os.path.join(ROOT, "android", "app", "build.gradle")).read()
    g = lambda key: re.search(key + r"\s+'?([\w.]+)'?", gradle).group(1)
    package, version, version_code = g("applicationId"), g("versionName"), g("versionCode")
    min_sdk, target_sdk = g("minSdk"), g("targetSdk")

    if not a.skip_web:
        run(["npm", "run", "build"], cwd=os.path.join(ROOT, "game"))

    shutil.rmtree(BUILD, ignore_errors=True)
    os.makedirs(BUILD)
    os.makedirs(DIST, exist_ok=True)

    # 1. resources (compiled once)
    res_zip = os.path.join(BUILD, "res.zip")
    run([aapt2, "compile", "--dir", os.path.join(APP, "res"), "-o", res_zip])
    manifest_src = open(os.path.join(APP, "AndroidManifest.xml")).read()
    manifest_src = manifest_src.replace("<manifest ", f'<manifest package="{package}" ', 1)

    def link(variant):
        m = manifest_src
        if variant == "debug":
            m = m.replace("<application", '<application android:debuggable="true"', 1)
        d = os.path.join(BUILD, variant)
        os.makedirs(d, exist_ok=True)
        mf = os.path.join(d, "AndroidManifest.xml")
        open(mf, "w").write(m)
        gen = os.path.join(d, "gen")
        os.makedirs(gen, exist_ok=True)
        apk = os.path.join(d, "base.apk")
        run([aapt2, "link", "-I", android_jar, "--manifest", mf,
             "-A", os.path.join(APP, "assets"), "--java", gen, "--min-sdk-version", min_sdk,
             "--target-sdk-version", target_sdk, "--version-name", version, "--version-code", version_code,
             "-0", "js", "-0", "html", "-0", "css", "-o", apk, res_zip])
        return apk, gen

    variants = [v for v in ("debug", "release") if a.only in (None, v)]
    linked = {v: link(v) for v in variants}

    # 2. java -> class -> dex (R.java is identical for both variants)
    classes = os.path.join(BUILD, "classes")
    os.makedirs(classes)
    srcs = []
    for d in (os.path.join(APP, "java"), linked[variants[0]][1]):
        for r, _, fs in os.walk(d):
            srcs += [os.path.join(r, f) for f in fs if f.endswith(".java")]
    run(["javac", "-nowarn", "-Xlint:-options", "-source", "8", "-target", "8", "-encoding", "UTF-8",
         "-bootclasspath", android_jar, "-d", classes] + srcs)
    dex_dir = os.path.join(BUILD, "dex")
    os.makedirs(dex_dir)
    run(["java", "-cp", dx, "com.android.dx.command.Main", "--dex", "--min-sdk-version=" + min_sdk,
         "--output=" + os.path.join(dex_dir, "classes.dex"), classes])

    # 3. add dex, align, sign
    signer = ["java", "-jar", apksigner, "sign", "--min-sdk-version", min_sdk,
              "--v1-signing-enabled", "true", "--v2-signing-enabled", "true", "--v3-signing-enabled", "true"]
    outputs = []
    for v in variants:
        base_apk = linked[v][0]
        unaligned = os.path.join(BUILD, v, "unaligned.apk")
        shutil.copy(base_apk, unaligned)
        with zipfile.ZipFile(unaligned, "a", zipfile.ZIP_DEFLATED) as z:
            z.write(os.path.join(dex_dir, "classes.dex"), "classes.dex")
        aligned = os.path.join(BUILD, v, "aligned.apk")
        zipalign(unaligned, aligned)
        if v == "debug":
            ks = os.path.join(ROOT, "build", "debug.keystore")
            ensure_keystore(ks, "androiddebugkey", "android", "android", "CN=Android Debug,O=Android,C=US")
            out = os.path.join(DIST, f"DashKingdom3D-v{version}-debug.apk")
            run(signer + ["--ks", ks, "--ks-pass", "pass:android", "--key-pass", "pass:android",
                          "--ks-key-alias", "androiddebugkey", "--out", out, aligned])
        else:
            ks = os.environ.get("DK_RELEASE_KEYSTORE", os.path.join(ROOT, "keystore", "release.jks"))
            sp = os.environ.get("DK_RELEASE_STOREPASS", "dashkingdom")
            alias = os.environ.get("DK_RELEASE_KEYALIAS", "dashkingdom")
            kp = os.environ.get("DK_RELEASE_KEYPASS", sp)
            ensure_keystore(ks, alias, sp, kp, "CN=Dash Kingdom 3D,O=SonicXMario,C=BR")
            out = os.path.join(DIST, f"DashKingdom3D-v{version}-release.apk")
            run(signer + ["--ks", ks, "--ks-pass", "pass:" + sp, "--key-pass", "pass:" + kp,
                          "--ks-key-alias", alias, "--out", out, aligned])
        outputs.append(out)

    for out in outputs:
        run(["java", "-jar", apksigner, "verify", "--verbose", "--min-sdk-version", min_sdk, out])
        print(f"OK {out} ({os.path.getsize(out) / 1024 / 1024:.2f} MB)")
        idsig = out + ".idsig"
        if os.path.exists(idsig):
            os.remove(idsig)


if __name__ == "__main__":
    main()
