import Markdown from 'react-markdown';
import { notFound } from 'next/navigation';

import { type BlurImageDataType, getBlurData } from '@/app/actions';
import { type SingleBlogPageResponseType, getSingleBlogPage } from '@/utils/notion-service';
import { ImageContainer, ImageWithBlur } from '@/components/ui/image-component';
import { type BlogType } from '@/types';

export const revalidate = 600; // revalidate the data every 10 minutes
export const dynamicParams = true;

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { blog, markdown } = (await getSingleBlogPage(params.slug)) as SingleBlogPageResponseType;
  if (!blog || !markdown) return notFound();
  const blurImageData = (await getBlurData(blog.cover)) as BlurImageDataType;
  return (
    <main className="h-auto w-full">
      <div className="mb-10 flex w-full flex-col gap-3 pl-36 max-sm:pl-5">
        <ImageContainer className="h-auto w-[90%]">
          <ImageWithBlur blurImageData={blurImageData} alt="cover" className="h-96 w-full rounded-3xl" />
        </ImageContainer>
        <h1 className="mt-7 text-5xl max-sm:text-4xl">{blog.title}</h1>
        <p>Dibuat per tanggal {blog.createdAt}</p>
      </div>
      <div className="flex h-auto w-full items-center justify-center">
        <article className="prose mx-auto mb-10 max-w-[80%]">{markdown.parent ? <Markdown>{markdown.parent}</Markdown> : <p>Artikel masih kosong</p>}</article>
      </div>
    </main>
  );
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { blog }: { blog: BlogType } = (await getSingleBlogPage(params.slug)) as { blog: BlogType };
  if (!blog) notFound();
  return { title: `Estungkara - ${blog.title}` };
};
