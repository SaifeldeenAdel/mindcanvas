/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--heebo)"],
				serif: ["var(--fraunces)"],
				montserrat: ["var(--montserrat)"],
				josefin: ["var(--josefin)"],
				nunito: ["var(--nunito)"],
			},
			colors: {
				primary: "#001f2c",
				secondary: "#ebf9ff",
			},
			screens: {
				lg: "1400px",
			},
		},
	},
	plugins: [],
};
