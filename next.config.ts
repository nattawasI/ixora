import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icadmin.ixoradesign.com',
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
