import remarkGfm from "remark-gfm" // remark plugin
import createMDX from "@next/mdx"
// mdx
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm], // 添加markdown插件
    rehypePlugins: []
  }
})

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
export default withMDX(nextConfig)
