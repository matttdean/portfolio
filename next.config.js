/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/manga/a1c7c817-4e59-43b7-9365-09675a149a6f/feed?order[chapter]=desc&limit=1',
            destination: 'https://api.mangadex.org/manga/a1c7c817-4e59-43b7-9365-09675a149a6f/feed?order[chapter]=desc&limit=1',
          },
        ]
      },
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
