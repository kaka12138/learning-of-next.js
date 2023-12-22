export default async function ArticlePage() {
  // 使用frontmatter时
  const articlModule: any = await import("../blogcontent/1.mdx")
  const { default: Compoent, frontmatter: { title, author } } = articlModule
  // 使用meta
  const articlModuleForMeta: any = await import("../blogcontent/2.mdx")
  const { default: CompoentMeta, meta: { title_meta, author_meta } } = articlModuleForMeta
  
  return (
    <main>
      <p>使用frontmatter</p>
      <div>文章标题: { title }</div>
      <div>文章作者: { author }</div>
      <Compoent></Compoent>
      <p>使用meta</p>
      <div>文章标题: { title_meta }</div>
      <div>文章作者: { author_meta }</div>
    </main>
  )
}
