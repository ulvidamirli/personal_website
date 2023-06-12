import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(10000, 0);

  const baseSitemap = [
    {
      url: `${process.env.WEB_CLIENT_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.WEB_CLIENT_BASE_URL}/posts`,
      lastModified: new Date(),
    },
  ];

  const postSitemap = posts.data.map((post) => ({
    url: `${process.env.WEB_CLIENT_BASE_URL}/posts/${post.id}/${post.slug}`,
    lastModified: new Date(post.date_updated ?? post.date_created),
  }));

  return [...baseSitemap, ...postSitemap];
}
