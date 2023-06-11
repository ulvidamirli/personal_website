import Pagination from "./Pagination";
import PostList from "./PostList";
import { getPosts } from "@/lib/api";

export default async function PostListContainer({ currentPage, }: { currentPage: number; }): Promise<JSX.Element> {
  const limit = 10;
  const offset = (currentPage - 1) * limit;

  const posts = await getPosts(limit, offset);
  const total = posts.meta.filter_count;

  return (
    <>
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} total={total} limit={limit} />
    </>
  );
}
