/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'dashboard.vannapps.com',
                protocol: "https"
            }
        ]
    }
}

module.exports = nextConfig
