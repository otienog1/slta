/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.starlynthrillingadventures.com'],
  }
}

module.exports = nextConfig
