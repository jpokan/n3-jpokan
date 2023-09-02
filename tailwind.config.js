module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
	],
	theme: {
		extend: {
			fontFamily: {
				'jost': ['Jost'],
				'righteous': ['Righteous'],
				'limelight': ['Limelight'],
				'reemkufiink': ['Reem Kufi Ink'],
				'brunoacesc': ['Bruno Ace SC'],
				'koulen': ['Koulen'],
				'squadaone': ['Squada One'],
				'monomaniacone': ['Monomaniac One'],
				'bayon': ['Bayon'],
				'leaguegothic_condensed': ['League Gothic Condensed'],
				'leaguegothic_semicondensed': ['League Gothic Semi Condensed'],
				'leaguegothic': ['League Gothic']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
	// ...
}
