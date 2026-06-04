import type { NextConfig } from "next";

// Only apply static export + basePath when building for GitHub Pages
// This keeps local `npm run dev` working at http://localhost:3000/
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/roof-supply',
    assetPrefix: '/roof-supply/',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
