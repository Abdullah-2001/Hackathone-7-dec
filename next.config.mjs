/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'regen.pk',
                pathname: '/cdn/shop/files/**',
            },
        ],
    },
};

export default nextConfig;
