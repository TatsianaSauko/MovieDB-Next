/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cinemaguide.skillbox.cc',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
