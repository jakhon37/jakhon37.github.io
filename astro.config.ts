import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jakhon37.github.io",
  output: "static",
  integrations: [sitemap()],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      watch: {
        usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
        interval: 300,
      },
    },
  },
});
