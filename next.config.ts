import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.c2.liara.space"], // ✅ Allow Liara Storage domain
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*` // Proxy to Backend
      }
    ]
  }
};




 

 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);