import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.c2.liara.space"], // ✅ Allow Liara Storage domain
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*' // Proxy to Backend
      }
    ]
  }
};

export default nextConfig;
