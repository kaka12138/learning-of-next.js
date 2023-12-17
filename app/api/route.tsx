import { NextResponse, type NextRequest } from "next/server"
// export 一个名为 GET 的 async 函数来定义 GET 请求处理, 其他方法同理
export async function GET(request: NextRequest, context: { params: object }) {
  const res = await fetch("https://dog-api.kinduff.com/api/facts")
  const data = await res.json()
  
  // 设置相应内容
  // NextResponse 是 Next.js 基于 Response 的封装，它对 TypeScript 更加友好，同时提供了更为方便的用法，比如获取 Cookie 等
  return NextResponse.json({ data })
}
