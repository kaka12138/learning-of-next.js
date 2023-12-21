// mdx
const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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
module.exports = withMDX(nextConfig)
