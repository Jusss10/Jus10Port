import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			height: {
				"150vh": "150vh",
				"60vh": "60vh",
			},
			fontFamily: {
				display: ["Oswald"],
				tiny1: ['"Open Sans"'],
			},
		},
	},
	plugins: [],
};
export default config;
