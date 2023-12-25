import { ImageResponse } from "next/og"

// 路由段配置
export const runtime = "edge"

// 图片metadata
export const size = {
  width: 32,
  height: 32
}

export const contentType = "image/png"

// JSX元素
const el = <div style={{
      fontSize: 24,
      background: 'black',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    }}>
    B
  </div>
// 默认导出函数: 图片生成
export default function Icon() {
  return new ImageResponse(el, {...size})
}
