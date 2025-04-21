/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  // Utiliser des chemins relatifs au lieu de l'URL absolue
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig