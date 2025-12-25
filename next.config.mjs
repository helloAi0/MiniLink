/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MiniLink', // Your repository name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
}

module.exports = nextConfig