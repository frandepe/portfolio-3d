import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  // adapter: netlify({
  //   edgeMiddleware: true,
  // }),
  adapter: vercel(),
});

// export default defineConfig({
//   site: 'https://nemutas.github.io',
//   base: '/three-template-with-astro',
//   server: {
//     host: true,
//   },
//   vite: {
//     plugins: [glsl()],
//     build: {
//       assetsInlineLimit: 0,
//       rollupOptions: {
//         output: {
//           assetFileNames: '[ext]/[name][extname]',
//           entryFileNames: 'script/entry.js',
//         },
//       },
//       cssCodeSplit: false,
//     },
//   },
// })
