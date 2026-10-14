#!/usr/bin/env bash
# Downloads a minimal Android build toolchain (no Android Studio / SDK manager needed):
#   - aapt2 (linux x64)           : from the npm package "aaptjs3"
#   - android.jar (API 30)         : platform stubs + framework resources
#   - dx 1.16 (dex compiler)       : Maven Central (com.jakewharton.android.repackaged:dalvik-dx)
#   - apksigner (v1+v2+v3 signing) : from the npm package "@postar/apktool-node"
# If you have the official Android SDK installed, you can instead point the build at it
# (see tools/build_apk.py --help) or use the Gradle project in android/.
set -euo pipefail
DEST="${1:-$(cd "$(dirname "$0")/.." && pwd)/.toolchain}"
mkdir -p "$DEST" && cd "$DEST"
TMP=$(mktemp -d)

if [ ! -x aapt2 ]; then
  curl -fsSL --retry 6 --retry-delay 5 --retry-all-errors -o "$TMP/aapt.tgz" https://registry.npmjs.org/aaptjs3/-/aaptjs3-2.0.2.tgz
  tar xzf "$TMP/aapt.tgz" -C "$TMP" package/bin/x64/linux/aapt2
  cp "$TMP/package/bin/x64/linux/aapt2" aapt2 && chmod +x aapt2
fi
if [ ! -f android.jar ]; then
  curl -fsSL --retry 6 --retry-delay 5 --retry-all-errors -o android.jar https://raw.githubusercontent.com/Sable/android-platforms/master/android-30/android.jar
fi
if [ ! -f dx.jar ]; then
  curl -fsSL --retry 6 --retry-delay 5 --retry-all-errors -o dx.jar https://repo.maven.apache.org/maven2/com/jakewharton/android/repackaged/dalvik-dx/16.0.1/dalvik-dx-16.0.1.jar
fi
if [ ! -f apksigner.jar ]; then
  curl -fsSL --retry 6 --retry-delay 5 --retry-all-errors -o "$TMP/apktool.tgz" https://registry.npmjs.org/@postar/apktool-node/-/apktool-node-0.3.4.tgz
  tar xzf "$TMP/apktool.tgz" -C "$TMP" package/lib/apksigner.jar
  cp "$TMP/package/lib/apksigner.jar" apksigner.jar
fi
rm -rf "$TMP"
echo "Toolchain ready in $DEST"
ls -la "$DEST"
