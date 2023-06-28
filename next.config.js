/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/(.*)',
                destination: `https://www.sanchittewari.vercel.app`,
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig
