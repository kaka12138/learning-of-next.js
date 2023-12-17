import { photos } from "@/app/data";

export default function PhotoPage({params} : { params: { id: string } }) {
  const target = photos.find(item => item.id === params.id)
  return <div>
    <h1 className="text-center">photo detail</h1>
    <div className="flex justify-center">
      { target&&<img width="400" src={ target.src } alt="" /> }
    </div>
  </div>
}
