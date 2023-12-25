import { cookies } from "next/headers"
interface IRouterInfo {
  params: {
    slug: string
  }
}
export default function Page({ params }: IRouterInfo) {
  cookies().getAll()
  return <h2>My Post: { params.slug }</h2>
}
