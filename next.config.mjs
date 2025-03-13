/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allows all hosts
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

