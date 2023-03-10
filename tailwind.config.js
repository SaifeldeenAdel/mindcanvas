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
        serif: ["var(--fraunces)"]
      },
      colors: {
        primary: '#00121a',
        secondary: '#ebf9ff'
      }
    },

	},
	plugins: [],
};
