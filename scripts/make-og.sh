#!/bin/zsh
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/og.png"
port=8765

cd "$root"
python3 -m http.server "$port" --bind 127.0.0.1 >/tmp/og-http.log 2>&1 &
pid=$!
trap 'kill $pid 2>/dev/null || true' EXIT
sleep 0.4

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --virtual-time-budget=4000 \
  --screenshot="$out" \
  "http://127.0.0.1:${port}/scripts/og.html"

sips -g pixelWidth -g pixelHeight "$out"
