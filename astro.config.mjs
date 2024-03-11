import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	site: "https://dreamland.js.org",
	integrations: [],
	trailingSlash: "never",
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: "wrap",
					test: ({ tagName }) => tagName !== "h1"
				}
			]
		]
	},
	build: {
		format: "preserve"
	}
});
