import { MetadataRoute } from "next";
import { getPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(10000, 0);

  const baseSitemap = [
    {
      url: "https://www.ulvidamirli.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.ulvidamirli.com/posts",
      lastModified: new Date(),
    },
  ];

  const postSitemap = posts.data.map((post) => ({
    url: `https://www.ulvidamirli.com/posts/${post.id}/${post.slug}`,
    lastModified: new Date(post.date_updated ?? post.date_created),
  }));

  return [...baseSitemap, ...postSitemap];
}
