import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to /out,
  // which can be hosted anywhere (GitHub Pages, Netlify, Cloudflare Pages...).
  output: "export",
  trailingSlash: true,
  images: {
    // Static hosts have no image-optimization server
    unoptimized: true,
  },
};

export default nextConfig;
