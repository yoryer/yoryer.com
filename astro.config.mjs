// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import ogImageIntegration from "./scripts/astro-og-integration.js";

// https://astro.build/config
export default defineConfig({
  site: "https://yoryer.com",
  integrations: [react(), sitemap(), tailwind(), ogImageIntegration()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    syntaxHighlight: "prism"
  }
});