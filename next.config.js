/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  images:{ domains: ['images.punkapi.com', 'cdn.weatherapi.com'] },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'standalone',
}

module.exports = nextConfig
