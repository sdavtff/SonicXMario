#!/bin/bash
# Installs the APK on a running emulator/device, launches it, plays briefly and collects
# screenshots + logcat into emu-results/. Fails on install failure, crash or process death.
set -u
APK="$1"; PKG=com.sdavtff.dashkingdom; OUT=emu-results
mkdir -p "$OUT"
fail() { echo "FAIL: $*" | tee -a "$OUT/result.txt"; adb logcat -d > "$OUT/logcat.txt"; exit 1; }
shot() { adb exec-out screencap -p > "$OUT/$1.png"; echo "screenshot $1"; }
alive() { [ -n "$(adb shell pidof $PKG | tr -d '\r')" ]; }

adb shell getprop ro.build.version.release | sed 's/^/Android version: /' | tee "$OUT/result.txt"
adb shell getprop ro.product.cpu.abi | sed 's/^/ABI: /' | tee -a "$OUT/result.txt"
adb shell dumpsys package com.google.android.webview | grep -m1 versionName | sed 's/^ */WebView /' | tee -a "$OUT/result.txt"
adb install -r "$APK" | tee -a "$OUT/result.txt" || fail "adb install"
adb shell pm list packages | grep -q "$PKG" || fail "package not installed"
adb logcat -c
adb shell am start -W -n "$PKG/.MainActivity" | tee -a "$OUT/result.txt"
sleep 35
alive || fail "process died after launch"
shot 01_main_menu
SIZE=$(adb shell wm size | grep -o '[0-9]*x[0-9]*' | tail -1); A=${SIZE%x*}; B=${SIZE#*x}
W=$(( A > B ? A : B )); H=$(( A > B ? B : A ))
echo "screen ${W}x${H} (landscape)" | tee -a "$OUT/result.txt"
# tap "JOGAR" (left column, ~37% height)
adb shell input tap $(( W * 22 / 100 )) $(( H * 37 / 100 ))
sleep 40
alive || fail "process died after starting stage 1"
shot 02_stage1
# hold the jump button a few times (bottom right)
for i in 1 2 3; do adb shell input tap $(( W * 90 / 100 )) $(( H * 80 / 100 )); sleep 1; done
# swipe on the joystick zone to run forward
adb shell input swipe $(( W * 15 / 100 )) $(( H * 75 / 100 )) $(( W * 15 / 100 )) $(( H * 55 / 100 )) 4000
sleep 2
shot 03_after_input
adb shell input keyevent KEYCODE_BACK
sleep 4
shot 04_pause_via_back
alive || fail "process died after back key"
# background / foreground
adb shell input keyevent KEYCODE_HOME; sleep 3
adb shell am start -n "$PKG/.MainActivity"; sleep 6
alive || fail "process died after resume"
shot 05_resumed
adb logcat -d > "$OUT/logcat.txt"
grep -E "FATAL EXCEPTION|AndroidRuntime: .*$PKG" "$OUT/logcat.txt" && fail "crash in logcat"
grep -E "DashKingdom" "$OUT/logcat.txt" > "$OUT/game_console.txt" || true
echo "---- game console (logcat) ----"; grep -E "\[DK\]|rro|rror" "$OUT/game_console.txt" | head -40
grep -q "\[DK\] boot ok webgl=" "$OUT/game_console.txt" || fail "game did not boot (no WebGL?)"
grep -q "\[DK\] level loaded green" "$OUT/game_console.txt" || fail "stage 1 did not load"
grep -q "\[DK\] playing level=green" "$OUT/game_console.txt" || fail "no gameplay frames reported"
grep -iE "uncaught|pageerror|Erro" "$OUT/game_console.txt" && echo "WARNING: JS errors logged (see game_console.txt)" | tee -a "$OUT/result.txt"
adb shell am force-stop "$PKG"
echo "PASS: install, launch, start stage, input, pause (back), background/resume" | tee -a "$OUT/result.txt"
