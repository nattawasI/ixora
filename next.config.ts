import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icadmin.icideax.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'ixoradesign.com',
      },
    ],
  },
}
export default nextConfig
