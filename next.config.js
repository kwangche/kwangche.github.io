/** @type {import('next').NextConfig} */
const nextConfig = (() => {
	const rawBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim();
	const basePath = rawBasePath
		? rawBasePath.startsWith('/')
			? rawBasePath
			: `/${rawBasePath}`
		: '';

	return {
		output: 'export',
		trailingSlash: true,
		basePath,
		assetPrefix: basePath,
		images: { unoptimized: true },
		reactStrictMode: true,
	};
})();

module.exports = nextConfig;
