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
				"115vh": "115vh",
			},
			fontFamily: {
				tiny5: ["Oswald"],
			},
		},
	},
	plugins: [
	
	],
};
export default config;
