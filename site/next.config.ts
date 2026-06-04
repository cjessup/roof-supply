import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: '/roof-supply', // Required because the site will be hosted at https://cjessup.github.io/roof-supply/
  assetPrefix: '/roof-supply/',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Good for GitHub Pages
};

export default nextConfig;
