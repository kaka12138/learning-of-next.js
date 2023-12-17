import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json()
  return NextResponse.json({ res })

  // 请求正文是FormData类型时
  // const formData = await request.formData()
  // const name = formData.get('name')
  // const email = formData.get('email')
  // return NextResponse.json({ name, email })
}
