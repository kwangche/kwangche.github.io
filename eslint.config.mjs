import next from 'eslint-config-next';

const config = [
	...next,
	{
		ignores: [
			'.history/**',
			'.next/**',
			'out/**',
			'public/**',
			'**/*.min.js',
		],
	},
];

export default config;
