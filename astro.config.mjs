import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://dreamland.js.org",
  integrations: [icon()],
  trailingSlash: "never",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      behavior: "wrap",
      test: ({
        tagName
      }) => tagName !== "h1"
    }]]
  },
  build: {
    format: "preserve"
  },
  server: {
    host: true
  },
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%"))
      }
    },
    build: {
      cssMinify: "lightningcss"
    }
  }
});