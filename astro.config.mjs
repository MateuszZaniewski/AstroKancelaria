import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import compression from "vite-plugin-compression";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://kancelaria-paulinakomenda.netlify.app/",
  integrations: [react(), tailwind(), sitemap(), compress()],
  vite: {
    plugins: [compression()],
  },
  output: "server",
  adapter: netlify(),
});
