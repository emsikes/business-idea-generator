import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Export static HTML and JavaScript files
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
