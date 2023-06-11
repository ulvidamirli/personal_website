import type { Metadata } from "next";
import Tag from "@/components/Tag";
import { redirect } from "next/navigation";
import { getPost } from "@/lib/api";


export async function generateMetadata({ params: { id } }: { params: { id: string };}): Promise<Metadata> {
  const { data: post } = await getPost(id);

  return {
    title: post.name,
    description: post.excerpt,
    alternates: {
      canonical: `/posts/${post.id}/${post.slug}`,
    }
  };
}

export default async function Page({ params: { id, slug },}: { params: { id: string; slug: string };}): Promise<JSX.Element> {
  const { data: post } = await getPost(id);

  if (post.slug !== slug) {
    return redirect(`/posts/${post.id}/${post.slug}`);
  }

  return (
    <>
      <main className="w-full px-4">
        <Tag text={post.tag} />
        <h1 className="mb-10">{post.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose max-w-none"></div>
      </main>
    </>
  );
}
