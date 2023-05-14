/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.starlynthrillingadventures.com'],
  }
}

module.exports = nextConfig
