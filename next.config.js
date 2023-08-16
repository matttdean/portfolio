/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'matttdean.com'
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
