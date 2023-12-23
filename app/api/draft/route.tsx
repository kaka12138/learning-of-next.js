import { draftMode } from "next/headers"

export async function GET() {
  // 将设置一个 cookie 用于开启草稿模式，后续包含这个 cookie 的请求都会触发草稿模式，从而改变静态生成页面的行为。
  draftMode().enable()
  return new Response("Draft mode is enabled")
}
