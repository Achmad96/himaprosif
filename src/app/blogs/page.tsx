import { getPublishedBlogs } from '@/utils/notion-service';
import type { BlogType } from '@/types';

import BlogCard from '@/components/ui/blog-card';
import PaginationComponent from '@/components/ui/pagination';

export const revalidate = 600; // revalidate every 10 minutes
const BLOG_PER_PAGE = 3;

const isValidUUID = (uuid: string | null): boolean => {
  return uuid ? uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)?.length === 1 : false;
};

interface IPage {
  searchParams: {
    startCursor: string;
  };
}

export default async function Page({ searchParams }: IPage) {
  const { startCursor } = searchParams;
  const response = await getPublishedBlogs(BLOG_PER_PAGE, isValidUUID(startCursor) ? startCursor : undefined);
  const { blogs, hasMore, nextCursor } = response;
  return (
    <section className="flex h-auto min-h-[90dvh] w-full flex-col items-center justify-center gap-2">
      {blogs.map((blog: BlogType) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
      <PaginationComponent blogs={blogs} hasMore={hasMore} nextCursor={nextCursor} />
    </section>
  );
}
