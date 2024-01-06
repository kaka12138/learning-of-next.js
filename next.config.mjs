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
  // basePath: "/docs",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // locale
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en'
  },
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
  },
  // headers
  async headers() {
    return [
      {
        basePath: false, // 是否匹配basePath
        locale: false, // 是否匹配locale
        source: "/contact", // 匹配具体路径 
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          }
        ]
      },
      {
        source: "/contact", // 匹配具体路径 
        headers: [
          {
            key: 'x-custom-header-basepath',
            value: 'my custom header value with basepath',
          }
        ]
      },
      {
        source: "/blog/:slug*", // 通配符路径匹配
        headers: [
          {
            key: "x-slug",
            value: ":slug*"
          }
        ]
      },
      {
        // 路径相同时，并且key相同，后者覆盖前者，不相同则全部显示
        source: "/blog/:post([a-z])", // 正则匹配
        headers: [
          {
            key: "x-post",
            value: ":post"
          }
        ]
      },
      {
        source: "/:path*",
        has: [
          // 1. header中有x-add-header字段
          {
            type: "header",
            key: "x-add-header"
          },
          // 2. 查询参数为page=home
          {
            type: "query",
            key: "page",
            value: "home"
          },
          // 3. cookie中authorized=true
          {
            type: "cookie",
            key: "authorized",
            value: "true"
          }
        ],
        missing: [
          // 4. header中不能有x-missing-header字段
          {
            type: "header",
            key: "x-missing-header"
          }
        ],
        headers: [
          // 以上四个条件满足才返回才请求头字段
          {
            key: 'x-another-header',
            value: 'hello',
          },
        ]
      }
    ]
  }
}
export default withMDX(nextConfig)
