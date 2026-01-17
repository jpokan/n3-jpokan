module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xl: "1380px",
			},
			fontFamily: {
				jost: ["Jost"],
				satoshi: ["Satoshi"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// ...
	],
	// ...
};
