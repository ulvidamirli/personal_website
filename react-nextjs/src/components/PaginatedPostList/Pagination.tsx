import Link from "next/link";
import type { PaginationProps } from "./PostProps";

export default function Pagination({
  currentPage,
  limit,
  total,
}: PaginationProps): JSX.Element {
  return (
    <div className="flex justify-between mt-12 max-w-xs mx-auto">
      <div>
        {currentPage > 1 ? (
          <Link
            href={`/posts?page=${currentPage - 1}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Previous Page
          </Link>
        ) : null}
      </div>
      <div>
        {currentPage * limit < total ? (
          <Link
            href={`/posts?page=${currentPage + 1}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Next Page
          </Link>
        ) : null}
      </div>
    </div>
  );
}
