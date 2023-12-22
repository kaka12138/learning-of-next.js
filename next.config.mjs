import remarkGfm from "remark-gfm" // remark plugin
import remarkFrontmatter from "remark-frontmatter" // remark frontmatter
import remarkMdxFrontmatter from "remark-mdx-frontmatter" // remark mdx frontmatterr

import createMDX from "@next/mdx"
// mdx
const withMDX = createMDX({
  options: {
    // 添加markdown插件
    remarkPlugins: [
      remarkGfm,
      [remarkFrontmatter],
      [remarkMdxFrontmatter]
    ],
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
