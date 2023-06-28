/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/(.*)',
                destination: `https://www.sanchittewari.vercel.app/$1`,
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig
