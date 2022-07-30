/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['www.rixoshop.com'],
  },
};

module.exports = nextConfig;
