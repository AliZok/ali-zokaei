import { getPosts } from '@/api/services/posts.service';

export default async function BlogPage() {
  const { data: posts, error } = await getPosts(60);

  if (error || !posts) {
    return (
      <div className="error">
        <h1>Error Loading Posts</h1>
        <p>{'No posts found'}</p>
      </div>
    );
  } else {
    console.log("posts", posts)
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {
          posts.map((item) => {
            return (
              <div key={item.title}>
                {item.title}
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}