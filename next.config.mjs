/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
  images: {
    domains: ['images.com', 'metropoline.co.il'],
  },
  webpack: (config) => {
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
