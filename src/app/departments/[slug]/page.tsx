import { DEPARTMENTS_DATA, DepartmentType } from '@/constants/departments-data';
import { ImageContainer, ImageWithoutBlur } from '@/components/ui/image-component';
import { notFound } from 'next/navigation';
import { URL_FILE } from '@/constants/urls';
import Image from 'next/image';
import Container from '@/components/ui/container';

export const revalidate = 600; // revalidate every 10 minutes

const URL = URL_FILE as string;
const departmentStyle: any = {
  ti: ['w-1/2'],
  auditor: ['w-1/2'],
  bpi: ['w-3/5'],
  msdm: ['w-3/5'],
  kki: ['w-3/5'],
};

const descriptionStyle: any = {
  ti: ['w-1/2'],
  auditor: ['w-1/2'],
  bpi: ['w-3/5'],
  msdm: ['w-3/5'],
  kki: ['w-3/4'],
  pmdb: ['w-3/4'],
  pb: ['w-3/5'],
};

const Header = ({ children, slug, department }: { children: React.ReactNode; slug: string; department: DepartmentType }) => {
  const { title, group } = department;
  return (
    <>
      <h1 className="text-center text-3xl max-sm:text-xl">{title}</h1>
      <main className="relative flex h-[25rem] w-[90%] flex-col items-center justify-start max-lg:h-[20rem] max-md:h-[15rem] max-sm:h-[10rem]">
        <ImageContainer className={`relative h-full ${departmentStyle[slug] ? departmentStyle[slug]?.[0] : 'w-3/5'} max-lg:aspect-[16/9] max-lg:w-3/4 max-md:w-full`}>
          <ImageWithoutBlur src={`${URL}&id=${group}`} className={'object-contain'} alt="department-members" sizes="(max-width: 1024px) 100vw" />
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
    <div className={`absolute h-1/2 ${descriptionStyle[slug] ? descriptionStyle[slug]?.[0] : 'w-3/4'} -bottom-32 max-xl:-bottom-24 max-lg:w-[80%] max-sm:-bottom-28 max-sm:h-full max-sm:w-[110%]`}>
      <Image src={`${URL}&id=${descId}`} alt="background-description" fill={true} sizes="(max-width: 1024px) 100vw" />
      <div className="absolute flex h-full w-full items-center justify-center gap-20 max-lg:gap-10">
        <div className="relative h-20 w-20 brightness-0 max-md:h-12 max-md:w-12">
          <Image src={`${URL}&id=${logo}`} alt="logo-department" fill={true} sizes="(max-width: 1024px) 100vw" />
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
