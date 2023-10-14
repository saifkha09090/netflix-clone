/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
},
  images: {
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig
