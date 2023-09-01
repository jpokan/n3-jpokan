// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/css/fonts.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode'
	],
	tailwindcss: {
		cssPath: '~/src/assets/css/tailwind.css',
		viewer: false,
	},
	colorMode: {
		classSuffix: ''
	}
})
