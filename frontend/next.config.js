/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    STRAPI_ADDRESS: "http://127.0.0.1:1337/graphql"
  },
}

module.exports = nextConfig
