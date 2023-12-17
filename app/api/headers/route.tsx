import { type NextRequest } from "next/server";

import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  // 通过 NextRequest对象设置headers
  const headerList1 = new Headers(request.headers)
  const referer1 = headerList1.get("referer")
  // 通过next/headers包提供的 headers 方法
  const headerList2 = headers()
  const referer2 = headerList2.get("referer") as string

  return new Response("hello, headers", {
   status: 200,
   headers: {
      referer: referer2
   } 
  })
}
