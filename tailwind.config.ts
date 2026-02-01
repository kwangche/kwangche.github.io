import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: 'var(--bg)',
					muted: 'var(--bg-muted)',
					glass70: 'var(--bg-glass-70)',
					glass55: 'var(--bg-glass-55)',
					glass80: 'var(--bg-glass-80)',
					muted40: 'var(--bg-muted-40)',
				},
				fg: {
					DEFAULT: 'var(--fg)',
					muted: 'var(--fg-muted)',
				},
				line: 'var(--line)',
				brand: {
					DEFAULT: 'var(--brand)',
					2: 'var(--brand-2)',
				},
				accent: {
					blue: 'var(--accent-blue)',
					green: 'var(--accent-green)',
					violet: 'var(--accent-violet)',
					amber: 'var(--accent-amber)',
				},
			},
			boxShadow: {
				soft: '0 1px 2px rgba(15, 23, 42, 0.06), 0 10px 40px rgba(15, 23, 42, 0.06)',
			},
			keyframes: {
				skeleton: {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
			},
			animation: {
				skeleton: 'skeleton 1.4s ease-in-out infinite',
			},
		},
	},
	plugins: [],
} satisfies Config;
