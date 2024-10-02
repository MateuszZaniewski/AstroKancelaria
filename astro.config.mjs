import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import compression from "vite-plugin-compression";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.adwokatkomenda.pl/",
  integrations: [react(), tailwind(), sitemap(), compress(), mdx()],
  vite: {
    plugins: [compression()],
  },
  output: "server",
  adapter: netlify(),
});
