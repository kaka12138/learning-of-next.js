interface IRouterInfo {
  params: {
    slug: string
  }
}
export default function Page({ params }: IRouterInfo) {
  return <h2>My Post: { params.slug }</h2>
}
