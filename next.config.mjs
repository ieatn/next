/** @type {import('next').NextConfig} */
// you have to do this for Image tag unfortunately
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
