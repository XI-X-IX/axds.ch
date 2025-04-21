/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  // Configuration pour votre domaine axds.ch
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://axds.ch' : '',
  basePath: '',
}

module.exports = nextConfig