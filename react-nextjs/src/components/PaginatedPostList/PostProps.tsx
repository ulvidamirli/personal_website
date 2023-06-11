export type PostListProps = {
  data: {
    id: number;
    date_created: string;
    date_updated: string | null;
    name: string;
    slug: string;
    excerpt: string;
    cover_image: string;
    content: string;
    tag: string;
  }[];
  meta: {
    filter_count: number;
  };
};

export type PostProps = {
  data: {
    id: number;
    date_created: string;
    date_updated: string | null;
    name: string;
    slug: string;
    excerpt: string;
    cover_image: string;
    content: string;
    tag: string;
  };
};

export type PaginationProps = {
  currentPage: number;
  limit: number;
  total: number;
};

export type PostCardProps = {
  href: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
};
