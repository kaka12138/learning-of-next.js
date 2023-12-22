import type { MDXComponents } from "mdx/types" 
import Image from "next/image"
function genImg(props: any) {
  let { src, alt, title } = props
  let { width, height }= JSON.parse(title)
  if(!src) src = ""
  if(!width) width = 200
  if(!height) height = 200

  return (
    <Image
      src={ src }
      width={ Number(width) }
      height={ Number(height) }
      {...props}
    />
  )
}
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义元素，修改markdown输出的结果或者样式
    h1: ({children}) => <h1 style={{ color: "red" }}>{ children }</h1>,
    img: (props) => genImg(props),
    ...components
  }
}
