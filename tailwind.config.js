module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
	],
	theme: {
		extend: {
			fontFamily: {
				'jost': ['Jost',]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
	// ...
}
