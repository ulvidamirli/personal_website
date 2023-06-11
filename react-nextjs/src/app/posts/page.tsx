import PostListContainer from "@/components/PaginatedPostList/PostListContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulvi Damirli Blog",
  description: "Code, tech, and other things I like to write about.",
  alternates: {
    canonical: "/posts",
  },
};

interface searchParamsProps {
  page: string | string[] | undefined;
}

export default function Page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}): JSX.Element {
  let currentPage: string | string[] | undefined | number = searchParams.page;
  if (typeof currentPage === "string") {
    currentPage = parseInt(currentPage, 10);
  } else {
    currentPage = 1;
  }
  if (currentPage < 1 || !Number.isInteger(currentPage)) {
    currentPage = 1;
  }

  return (
    <main className="w-full px-4">
      <h1>Posts</h1>
      <p>Code, tech, and other things I like to write about.</p>
      <hr className="my-10" />
      {/* @ts-expect-error Server Component. TS related bug: https://github.com/vercel/next.js/issues/42292 */}
      <PostListContainer currentPage={currentPage} />
    </main>
  );
}
