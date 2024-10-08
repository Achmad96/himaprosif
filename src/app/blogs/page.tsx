import { BlogsSkeleton } from '@/components/ui/blogs';
import { Suspense } from 'react';

import Blogs from '@/components/ui/blogs';

export const revalidate = 600; // revalidate the data every 10 minutes

interface IPage {
  searchParams: {
    startCursor: string;
  };
}

export default function Page({ searchParams }: IPage) {
  return (
    <section className="flex h-[90dvh] w-full flex-col items-center justify-center gap-7">
      <Suspense fallback={<BlogsSkeleton />}>
        <Blogs searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
