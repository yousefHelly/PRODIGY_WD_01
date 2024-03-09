/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				mainBackground:'#090227',
				mainLightBackground:'#271d4b',
				main:'#5653df',
				green:'#8bc65c',
				//shadcn/ui
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
				},
				card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
				},
				"nav-show": {
					from: { right:'-25vh' },
					to: { right: "0vh" },
				},
				"nav-hide": {
					from: { right:'0vh' },
					to: { right: "-25vh" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"nav-show": "nav-show 0.2s ease-out",
				"nav-hide": "nav-hide 0.2s ease-out",
			},
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ matchUtilities, theme }) {
			matchUtilities(
			{
			"bg-grid": (value) => ({
				backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			}),
			"bg-grid-small": (value) => ({
				backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			}),
			"bg-dot": (value) => ({
				backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
				)}")`,
			}),
			},
			{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		);
		},
	],
}
