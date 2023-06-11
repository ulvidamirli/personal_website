import Chip from "../Chip";
import Link from "next/link";
import type { PostCardProps } from "./PostProps";

export default function PostCard({
  href,
  date,
  tag,
  title,
  excerpt,
}: PostCardProps): JSX.Element {
  return (
    <article>
      <Link href={href} className="block group">
        <div className="space-x-4">
          <span className="p-xsmall">{date}</span>
          <Chip text={tag} />
        </div>
        <h2 className="h4 group-hover:text-blue-700 group-hover:underline">
          {title}
        </h2>
        <p className="p-small line-clamp-2 !text-gray-500">{excerpt}</p>
      </Link>
    </article>
  );
}
