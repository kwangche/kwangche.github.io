const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPagesRepo = repo.endsWith('.github.io');

const basePath =
    process.env.GITHUB_ACTIONS === 'true' && !isUserPagesRepo ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
module.exports = {
    output: 'export',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
    images: { unoptimized: true },
};
