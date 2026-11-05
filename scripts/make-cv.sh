#!/bin/zsh
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/Jakhongir_Nodirov_CV.pdf"
profile="$(mktemp -d)"
trap 'rm -rf "$profile"' EXIT

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --user-data-dir="$profile" \
  --print-to-pdf="$out" \
  "file://$root/scripts/cv.html"

ls -la "$out"
