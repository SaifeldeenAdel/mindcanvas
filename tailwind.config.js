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
				sans: ["var(--montserrat)"],
				serif: ["var(--fraunces)"],
				nunito: ["var(--nunito)"],
			},
			colors: {
				primary: "#003349",
				secondary: "#ebf9ff",
			},
			screens: {
				lg: "1400px",
			},
		},
	},
	plugins: [],
};
