"use client"
import { photos } from "@/app/data";
import { useRouter } from "next/navigation"
export default function PhotoPage({params} : { params: { id: string } }) {
  const target = photos.find(item => item.id === params.id)
  const router = useRouter()
  return <>
    <h1 className="text-center">拦截路由</h1>
    <div className="flex justify-center">
      { target&&<img width="240" src={ target.src } alt="" /> }
    </div>
    <div className="text-center"><button onClick={ () => router.back() }>Back</button></div>
  </>
}
