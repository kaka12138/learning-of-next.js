import Image from "next/image"
import DogImage from "@/public/dog.jpeg"
export default function ImagePage() {
  return (
    <ul className="flex">
      <li>
        <h2>基本使用</h2>
        <Image
          src="/dog.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </li>
      <li>
        <h2>使用静态图片</h2>
        <Image
          src={ DogImage }
          alt="alt"
        />
      </li>
      <li>
        <h2>使用远程图片</h2>
        <Image
          src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </li>
    </ul>
  )
}
