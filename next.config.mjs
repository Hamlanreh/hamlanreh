/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.tailgrids.com',
                pathname: '/1.0/assets/images/**',
                // port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.tailgrids.com',
                pathname: '/2.0/image/**',
                // port: '',
            },
            {
                protocol: 'https',
                hostname: 'flowbite.com',
                pathname: '/docs/images/**',
                // port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                // pathname: '/docs/images/**',
                // port: '',
            }
        ]
    }
};

export default nextConfig;
