// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/css/fonts.css', '@/assets/css/satoshi.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/content'
	],
	tailwindcss: {
		cssPath: '~/src/assets/css/tailwind.css',
		viewer: false,
	},
	colorMode: {
		classSuffix: ''
	},
	content: {
		navigation: {
			fields: ['published']
		}
	}
})
