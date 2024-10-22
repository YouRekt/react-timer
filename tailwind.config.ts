import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"component-bg": "#26273d",
			"circle-bg": "#545576",
			"circle-progress-bg": "#67cb88",
			"circle-finished-bg": "#cb6767",
			"timer-text": "#a2a4cb",
			timer: "#ffffff",
			"button-outline": "#606170",
		},
		extend: {
			borderRadius: {
				component: "25px",
			},
			keyframes: {
				finished: {
					"0%, 100%": { stroke: "#67cb88" },
					"50%": { stroke: "#cb6767" },
				},
			},
			animation: {
				finished: "finished 1s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
