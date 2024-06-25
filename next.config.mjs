/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pxscvmmpmqjtcjjlcghr.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/photos/**',
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
