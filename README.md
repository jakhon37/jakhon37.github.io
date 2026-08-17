# Jakhongir Nodirov

Personal site: [jakhon37.github.io](https://jakhon37.github.io)

Static Astro site, no client JavaScript.

## Local (Docker)

Docker is only the environment. Project files stay on the host and are bind-mounted; they are never `COPY`’d into the image. `node_modules` lives in a named volume so the Linux container does not mix with a macOS install.

```bash
docker compose up --build
```

Site: http://127.0.0.1:4321

After changing dependencies:

```bash
docker compose run --rm app npm ci
```

Stop:

```bash
docker compose down
```

Host `npm` still works if you want it (`npm install && npm run dev`).

## Server (Docker)

On the machine that has the repo checked out:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

That builds `dist/` on the mounted project, then serves it with nginx on port 80. After `git pull`, run the same command again.

```bash
docker compose -f docker-compose.prod.yml down
```

## Content

The site is a short portfolio, not a full CV. Edit typed data:

- `src/data/site.ts` — name, intro, links
- `src/data/work.ts` — featured work (keep this short)
- `src/data/publications.ts` — papers and citation counts

The complete record lives in `public/Jakhongir_Nodirov_CV.pdf`. Replace `public/portrait.jpg` to update the photo — it is shown in full, not cropped.

Citation counts are hardcoded (see the comment in `publications.ts`). Update them when Scholar moves.

## Deploy to GitHub Pages

This is meant to live at the user site `https://jakhon37.github.io` (repo `jakhon37/jakhon37.github.io`).

1. Create the repository `jakhon37.github.io` if it does not exist.
2. Push this project to `main`.
3. In the repo: **Settings → Pages → Source = GitHub Actions**.
4. The workflow in `.github/workflows/pages.yml` builds and publishes `dist/`.

The old student page at `/mrjohn.github.io/` can stay or be archived. The resume URL is the site root.

## Custom domain later

No code change. Add a `public/CNAME` file containing the domain (one line, e.g. `jakhongir.ai`) and point DNS:

- Apex: `A` records to GitHub Pages IPs, or an `ALIAS`/`ANAME`
- `www`: `CNAME` to `jakhon37.github.io`

Then enable the custom domain under **Settings → Pages**.
