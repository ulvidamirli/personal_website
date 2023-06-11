import PostCard from "./PostCard";
import type { PostListProps } from "./PostProps";

export default function PostList({ posts }: { posts: PostListProps }): JSX.Element {
  return (
    <>
      {posts
        ? posts.data.map((post) => (
            <PostCard
              key={post.id}
              href={`/posts/${post.id}/${post.slug}`}
              title={post.name}
              tag={post.tag}
              date={new Date(post.date_created).toLocaleDateString()}
              excerpt={post.excerpt}
            />
          ))
        : null}
    </>
  );
}
