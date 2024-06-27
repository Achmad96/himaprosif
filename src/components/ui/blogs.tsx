import { getPublishedBlogs } from '@/utils/notion-service';
import type { BlogType } from '@/types';

import BlogCard from '@/components/ui/blog-card';
import PaginationComponent from '@/components/ui/pagination';

const BLOG_PER_PAGE = 3;

const isValidUUID = (uuid: string | null): boolean => {
  return uuid ? uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)?.length === 1 : false;
};

export default async function Blogs({ searchParams }: { searchParams: { startCursor: string } }) {
  const { startCursor } = searchParams;
  const response = await getPublishedBlogs(BLOG_PER_PAGE, isValidUUID(startCursor) ? startCursor : undefined);
  const { blogs, hasMore, nextCursor } = response;
  return (
    <>
      {blogs.map((blog: BlogType) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
      <PaginationComponent searchParams={startCursor} blogs={blogs} hasMore={hasMore} nextCursor={nextCursor} />
    </>
  );
}

export const BlogsSkeleton = () => {
  return (
    <>
      {Array.from({ length: BLOG_PER_PAGE }).map((_, i) => (
        <div key={i} className="flex h-fit w-[80%] gap-4 max-sm:w-[95%]">
          {/* Cover */}
          <div className="skeleton h-[8rem] max-h-[8rem] min-h-[8rem] w-[15rem] min-w-[15rem] max-w-[15rem] max-lg:h-[6rem] max-lg:max-h-[6rem] max-lg:min-h-[6rem] max-lg:w-[10rem] max-lg:min-w-[10rem] max-lg:max-w-[10rem]" />
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex h-full w-full flex-col gap-2">
              {/* Title */}
              <div className="skeleton h-7 w-72 max-sm:w-32" />
              {/* Description */}
              <div className="skeleton h-14 w-full" />
            </div>
            {/* Tags */}
            <div className="flex h-full w-full justify-end">
              <div className="skeleton h-4 w-52 text-end max-sm:w-20" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
