import Link from 'next/link';
import { fetchPosts } from '../../../lib/wp';

export default async function PostsPage() {
	console.log('WP API:', process.env.NEXT_PUBLIC_WP_API)
  let posts = [];
  try {
    posts = await fetchPosts();
  } catch (err) {
    console.error('Failed to fetch posts:', err);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>WordPress Posts</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '2rem' }}>
            {/* Make the title clickable */}
            <h2>
              <Link href={`/posts/${post.slug}`}>
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
