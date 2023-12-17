interface IChildren {
  children: React.ReactNode,
  team: React.ReactNode,
  analytics: React.ReactNode
}

export default function UserLayout(props: IChildren) {
  return <div className="text-center">
    <h3>User Layout</h3>
    <div>{ props.children }</div>
    <div className="flex justify-center">
      <div className="mr-8">{ props.team }</div>
      <div>{ props.analytics }</div>
    </div>
  </div>
}
