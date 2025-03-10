import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.c2.liara.space"], // ✅ Allow Liara Storage domain
  },
};

export default nextConfig;
