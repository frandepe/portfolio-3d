import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
  build: { chunkSizeWarningLimit: 1600 },
  // adapter: netlify({
  //   edgeMiddleware: true,
  // }),
});
