import { createContentlayerPlugin } from 'next-contentlayer2';

const nextConfig = {
  // This documentation site is fully pre-rendered and hosted as static files.
  output: 'export',
  trailingSlash: true,
  // Next's default image optimizer requires a server; static hosting does not provide one.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https' as 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  webpack: (config: { cache: boolean }) => {
    config.cache = false;
    return config;
  },
};

const withContentlayer = createContentlayerPlugin({});

export default withContentlayer(nextConfig);
