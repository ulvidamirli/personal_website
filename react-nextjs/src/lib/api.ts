import type { PostListProps, PostProps } from "@/components/PaginatedPostList/PostProps";
import { notFound } from "next/navigation";
import { PostError } from "./exceptions";


export async function getPosts(limit: number, offset: number): Promise<PostListProps> {
    const res = await fetch(
        `${process.env.API_BASE_URL_DOCKER}/items/post?filter[status][_eq]=published&limit=${limit}&offset=${offset}&meta=filter_count`,
        {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: "no-cache",
        },
    );
    if (res.status === 404) notFound();
    if (!res.ok) throw new PostError(res.statusText);

    return res.json();
}

export async function getPost(id: string): Promise<PostProps> {
    const res = await fetch(`${process.env.API_BASE_URL_DOCKER}/items/post/${id}?filter[status][_eq]=published`, {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: "no-cache",
    });
    if (res.status === 404) notFound();
    if (!res.ok) throw new PostError(res.statusText);

    return res.json();
}