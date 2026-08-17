# Runtime environment only. Project files are bind-mounted at /app.
# Do not COPY the site into the image.
FROM node:22-bookworm-slim

WORKDIR /app

ENV NODE_ENV=development \
    npm_config_update_notifier=false \
    npm_config_fund=false \
    npm_config_audit=false \
    npm_config_cache=/tmp/.npm \
    HOME=/tmp

RUN printf '%s\n' \
  '#!/bin/sh' \
  'set -e' \
  'if [ ! -f /app/package.json ]; then' \
  '  echo "Nothing mounted at /app. Run via docker compose so the project bind-mounts in." >&2' \
  '  exit 1' \
  'fi' \
  'if [ ! -x /app/node_modules/.bin/astro ]; then' \
  '  echo "Installing dependencies into the container volume..."' \
  '  if [ -f /app/package-lock.json ]; then npm ci; else npm install; fi' \
  'fi' \
  '# Astro lock files store PIDs. Those PIDs are invalid after a new container starts.' \
  'rm -f /app/.astro/dev.json /app/.astro/preview.json /app/.astro/dev.log /app/.astro/preview.log' \
  'exec "$@"' \
  > /usr/local/bin/docker-env-entrypoint \
  && chmod +x /usr/local/bin/docker-env-entrypoint

EXPOSE 4321

ENTRYPOINT ["/usr/local/bin/docker-env-entrypoint"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]
