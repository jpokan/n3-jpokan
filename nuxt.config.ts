// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	compatibilityDate: "2025-06-24",
	css: ["@/assets/css/fonts.css", "@/assets/css/satoshi.css"],
	plugins: ["~/plugins/lazyload.js"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
	tailwindcss: {
		viewer: false,
	},
	colorMode: {
		classSuffix: "",
	},
	content: {
		build: {
			markdown: {
				highlight: {
					// Theme used in all color schemes.
					theme: "github-light",
				},
			},
		},
	},
	devtools: {
		enabled: false,
	},
	runtimeConfig: {
		public: {
			posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
			posthogHost: "https://us.i.posthog.com",
			posthogDefaults: "2025-05-24",
		},
	},
});
