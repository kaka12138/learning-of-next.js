import { type NextRequest } from "next/server";
import { cookies } from "next/headers"
export async function GET(request: NextRequest) {
  // 通过 NextRequest对象设置cookie
  const token = request.cookies.get("token")
  request.cookies.set("token2", "123")
  // 通过 next/headers包提供的 cookies方法
  const cookieStore = cookies()
  const token1 = cookieStore.get("token")
  
  return new Response("hello, next js", {
    status: 200,
    headers: { "Set-Cookie": `token1=${token1}` }
  })
}
