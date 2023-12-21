/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 静态写入链接
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t7.baidu.com",
        port: "",
        pathname: "/it/**"
      }
    ]
  }
}
module.exports = nextConfig
