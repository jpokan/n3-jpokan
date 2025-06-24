import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
		}),
		lab: defineCollection({
			type: "page",
			source: "lab/**/*.md",
		}),
		architecture: defineCollection({
			type: "page",
			source: "lab/photography/architecture/*.md",
		}),
		portrait: defineCollection({
			type: "page",
			source: "lab/photography/portrait/*.md",
		}),
		travel: defineCollection({
			type: "page",
			source: "lab/photography/travel/*.md",
		}),
		urban: defineCollection({
			type: "page",
			source: "lab/photography/urban/*.md",
		}),
	},
});
