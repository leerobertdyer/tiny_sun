/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tinysun.s3.us-east-2.amazonaws.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
    
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
