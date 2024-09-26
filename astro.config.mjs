// import { defineConfig } from "astro/config";
// import netlify from "@astrojs/netlify";
// import compression from "vite-plugin-compression";
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";

// import compress from "astro-compress";

// // https://astro.build/config
// export default defineConfig({
//   site: "https://kancelaria-paulinakomenda.netlify.app/",
//   integrations: [react(), tailwind(), sitemap(), compress()],
//   vite: {
//     plugins: [compression()],
//   },
//   output: "server",
//   adapter: netlify(),
// });

import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare"; // Use the Cloudflare adapter
import compression from "vite-plugin-compression";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://f200a3b4.astrokancelaria.pages.dev/", // Update to Cloudflare Pages URL
  integrations: [react(), tailwind(), sitemap(), compress()],
  vite: {
    plugins: [compression()],
  },
  output: "server", // Use static output for Cloudflare Pages
  adapter: cloudflare(), // Use Cloudflare Pages adapter
});
