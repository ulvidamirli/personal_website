import { NextResponse } from 'next/server';
import { redirect } from "next/navigation";
import { getPost } from '@/lib/api';


export default async function Page({ params: { id } }: { params: { id: string } }): Promise<NextResponse> {
    const { data: post } = await getPost(id);

    return redirect(`/posts/${post.id}/${post.slug}`);
}