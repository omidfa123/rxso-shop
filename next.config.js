/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['www.rixoshop.com'],
  },
  async headers() {
    return [
      {
        source: '/fonts/[name].[ext]',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000 , immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
