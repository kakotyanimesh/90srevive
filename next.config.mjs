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
};

export default nextConfig;

