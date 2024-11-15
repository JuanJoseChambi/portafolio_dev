/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray_light: '#5A5A5A',
				primary:"#724ab9"
			},
			textColor:{
				primary:"#724ab9"
			}
		},
	},
	plugins: [],
}
