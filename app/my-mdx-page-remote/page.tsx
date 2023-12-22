import { MDXRemote } from "next-mdx-remote/rsc"
import { ACom } from "../components/ACom"
export default async function RemoteMdxPage() {
  // 远程获取mdx
  // const res = await fetch("https://")
  // const markdown = await res.text()

  return (
    <MDXRemote
      source={`# Hello World

      This is from Server Components!
      <ACom />
      `}
      components={ {ACom} }
    />
  )
}
