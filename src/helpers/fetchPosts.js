export async function fetchPosts(slug) {
  let Post;
  try {
    Post = await import(`../../content/posts/${slug}.md`);
    return Post;
  } catch (error) {
    console.error("Failed to import post:", error);
    Post = null; // Or handle the error appropriately
  }
}
