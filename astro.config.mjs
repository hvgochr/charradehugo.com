// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.charradehugo.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  experimental: {
    fonts: [
      {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: fontProviders.google(),
        weights: ["400", "700"],
        fallbacks: ["Inter", "sans-serif"],
      },
    ],
  },
});
