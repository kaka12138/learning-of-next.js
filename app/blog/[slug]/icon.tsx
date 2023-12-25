import { ImageResponse } from "next/og"

// 这其实是生成了一张图片的不同尺寸版本
// 真正多张图片的生成应该是, 根据不同路由参数动态生成一张图片的不同版本
export function generateImageMetadata() {
  return [
    {
      id: "big",
      contentType: "image/png",
      size: { width: 128, height: 128 },
      alt: "big alt"
    },
    {
      id: "medium",
      contentType: "image/png",
      size: { width: 72, height: 72 },
      alt: "medium alt"
    },
    {
      id: "small",
      contentType: "image/png",
      size: { width: 48, height: 48 },
      alt: "small alt"
    },
  ]
}

export default function Icon({ params, id } : { params: { slug: string }, id: string}) {
  console.log("id, slug", id, params.slug)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          background: '#000',
          color: '#fafafa',
        }}
      >
        { id }
      </div>
    )
  )
} 
