#!/usr/bin/env bash
# Creates dist/DashKingdom3D-source-v<version>.zip from the committed sources (APKs excluded).
set -euo pipefail
cd "$(dirname "$0")/.."
V=$(grep -oP "versionName '\K[^']+" android/app/build.gradle)
OUT=dist/DashKingdom3D-source-v$V.zip
rm -f "$OUT"
git archive --format=zip --prefix=DashKingdom3D-v$V/ -o "$OUT" HEAD -- . ':(exclude)dist'
ls -la "$OUT"
