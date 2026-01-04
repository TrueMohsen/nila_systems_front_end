import { fetchPostBySlug } from '../../../../lib/wp'

export default async function PostPage({ params }) {
  const post = await fetchPostBySlug(params.slug)

  if (!post) {
    return <p>Post not found.</p>
  }

  return (
    <article style={{ padding: '2rem' }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  )
}
