export default async function ArticlePage() {
  const articlModule: any = await import("../blogcontent/1.mdx")
  const { default: Compoent, frontmatter: { title, author } } = articlModule
  return (
    <main>
      <div>文章标题: { title }</div>
      <div>文章作者: { author }</div>
      <Compoent></Compoent>
    </main>
  )
}
