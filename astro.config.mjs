import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import compression from "vite-plugin-compression";
import react from "@astrojs/react";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [compression()],
  },
  output: "server",
  adapter: netlify(),
});
