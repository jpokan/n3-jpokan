// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/css/fonts.css', '@/assets/css/satoshi.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/content',
	],
	tailwindcss: {
		viewer: false,
	},
	colorMode: {
		classSuffix: ''
	},
	content: {
		navigation: {
			fields: ['published', 'url', 'locale']
		}
	},
	devtools: {
		enabled: false
	}
})
