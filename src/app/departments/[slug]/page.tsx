import { DEPARTMENTS_DATA, DepartmentType } from '@/constants/departments-data';
import { ImageContainer, ImageWithoutBlur } from '@/components/ui/image-component';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ReactNode } from 'react';
import Container from '@/components/ui/container';

export const revalidate = 600; // revalidate every 10 minutes

const url = process.env.NEXT_PUBLIC_IMAGES_URL as string;
const fitDepartmentStyle: any = {
  ti: ['w-1/2', 'object-cover'],
  auditor: ['w-1/2', 'object-contain'],
  bpi: ['w-3/5', 'object-cover'],
  msdm: ['w-3/5', 'object-cover'],
  kki: ['w-3/5'],
};

const Header = ({ children, slug, department }: { children: ReactNode; slug: string; department: DepartmentType }) => {
  const { title, group } = department;
  return (
    <>
      <h1 className="text-3xl max-sm:text-xl">{title}</h1>
      <main className="flex h-full w-[90%] flex-col items-center">
        <ImageContainer className={`relative h-[25rem] ${fitDepartmentStyle[slug] ? fitDepartmentStyle[slug]?.[0] : 'w-3/5'} max-lg:aspect-[16/9] max-lg:w-3/4 max-md:w-full`}>
          <ImageWithoutBlur src={`${url}&id=${group}`} className={`${fitDepartmentStyle[slug] ? fitDepartmentStyle[slug]?.[1] : ''}`} alt="department-members" sizes="(max-width: 1024px) 100vw" />
        </ImageContainer>
        {children}
      </main>
    </>
  );
};

const Description = ({ slug, department }: { slug: string; department: DepartmentType }) => {
  const { logo, description } = department;
  const descId = '1ahzLmOvg8CcSn3nOMIpumLiGslQ2zAQI';
  return (
    <div className={`absolute bottom-2 h-1/3 ${fitDepartmentStyle[slug] ? fitDepartmentStyle[slug]?.[0] : 'w-3/5'} max-lg:w-full max-sm:mb-7`}>
      <Image src={`${url}&id=${descId}`} alt="background-description" fill={true} sizes="(max-width: 1024px) 100vw" />
      <div className="absolute flex h-full w-full items-center justify-center gap-20 max-lg:gap-10">
        <div className="relative h-20 w-20 brightness-0">
          <Image src={`${url}&id=${logo}`} alt="logo-department" fill={true} sizes="(max-width: 1024px) 100vw" />
        </div>
        <div className="relative flex w-3/5 flex-col gap-5 text-black">
          <p className="text-justify text-sm max-lg:text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface IPage {
  params: { slug: string };
}

export default async function Page({ params }: IPage) {
  const { slug } = params;
  const currentDepartment = DEPARTMENTS_DATA[slug];
  if (params.slug && !currentDepartment) return notFound();
  return (
    <Container className="flex h-auto w-full flex-col items-center justify-start gap-5">
      <Header slug={slug} department={currentDepartment}>
        <Description slug={slug} department={currentDepartment} />
      </Header>
    </Container>
  );
}
