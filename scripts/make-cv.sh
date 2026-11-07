#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/Jakhongir_Nodirov_CV.pdf"
profile="$(mktemp -d)"
trap 'rm -rf "$profile"' EXIT

# Chrome on macOS or Linux; set CHROME to use another build.
chrome="${CHROME:-}"
for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" google-chrome google-chrome-stable chromium chromium-browser; do
  [[ -n "$chrome" ]] && break
  command -v "$c" >/dev/null && chrome="$c"
done
[[ -n "$chrome" ]] || { echo "Chrome not found; set CHROME to its path" >&2; exit 1; }

"$chrome" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --user-data-dir="$profile" \
  --print-to-pdf="$out" \
  "file://$root/scripts/cv.html"

ls -la "$out"
