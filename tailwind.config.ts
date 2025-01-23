import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				YoungSerif: ['YoungSerif', 'YoungSerif']
			},
			dropShadow: {
				tight: '6px 8px 2px rgba(0, 0, 0, 0.25)'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
