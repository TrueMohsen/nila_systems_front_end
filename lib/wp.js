// lib/wp.js
export const WP_API_BASE = 'https://nilasystems.ir/index.php/wp-json/wp/v2';


export async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/posts`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  const posts = await res.json()
  return posts
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/posts?slug=${slug}`, { cache: 'no-store' })
  const posts = await res.json()
  console.log('fetchPostBySlug response:', posts)  // <- debug
  return posts[0]  // returns undefined if array is empty
}

