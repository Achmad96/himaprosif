import type { BlogType, TagType } from '@/types';
import { type BlurImageDataType, getBlurData } from '@/app/actions';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import Link from 'next/link';
import TagComponent from './tag';
import { ImageContainer, ImageWithBlur } from '@/components/ui/image-component';

interface BlogCardProps {
  blog: BlogType;
}

export default async function BlogCard(props: BlogCardProps) {
  const { blog } = props;
  const { title, description, cover, tags, slug } = blog;
  const blurImageData = (await getBlurData(cover)) as BlurImageDataType;
  return (
    <Link href={`/blogs/${slug}`} className="h-fit w-[80%] border-b border-b-green-700 max-sm:w-[95%]">
      <Card className="relative flex h-auto w-full flex-col">
        <CardHeader className="flex gap-5">
          <ImageContainer className="relative h-[8rem] max-h-[8rem] min-h-[8rem] w-[15rem] min-w-[15rem] max-w-[15rem] max-lg:h-[6rem] max-lg:max-h-[6rem] max-lg:min-h-[6rem] max-lg:w-[10rem] max-lg:min-w-[10rem] max-lg:max-w-[10rem]">
            <ImageWithBlur blurImageData={blurImageData} alt={title} fill={true} sizes="(max-width: 1024px) 100vw" />
          </ImageContainer>
          <div>
            <CardTitle className="max-lg:text-base max-sm:text-sm">{title}</CardTitle>
            <CardDescription className="max-lg:text-[0.5rem] max-sm:hidden">{description}</CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="absolute bottom-0 right-0 flex w-full items-end justify-end gap-2 text-slate-300 max-lg:text-sm max-md:text-xs">
          {tags.map((tag: TagType) => (
            <TagComponent key={tag.id} tag={tag} />
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
