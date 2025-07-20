import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['www.abudawood.com', 'upload.wikimedia.org', 'media.npr.org', 'www.neh.gov'],
  },
};

export default nextConfig;
