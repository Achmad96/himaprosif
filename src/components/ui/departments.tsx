'use client';
import { Noto_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import React from 'react';
import { DEPARTMENTS_DATA } from '@/constants/departments-data';
import { URL_FILE } from '@/constants/urls';

interface DepartmentCardProps {
  name: string;
  icon: string | StaticImageData;
  parentClassName?: string;
  childClassName?: string;
}

function DepartmentCard({ name, icon, parentClassName, childClassName }: DepartmentCardProps) {
  return (
    <motion.li
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 0px 75px #044d28',
      }}
      className={parentClassName}
    >
      <div className={childClassName}>
        <Image src={icon} alt={name} fill={true} sizes="(max-width: 640px) 30vw, (max-width: 768px) 40vw, (max-width: 1024px) 80vw, 100vw" loading="lazy" />
      </div>
      <p className="max-sm:text-sm">{name.toUpperCase()}</p>
    </motion.li>
  );
}

const noto_sans = Noto_Sans({ weight: '800', subsets: ['latin'] });
const URL = URL_FILE;
export default function Departments() {
  return (
    <section
      id="departments"
      className="flex h-auto min-h-screen w-full flex-col items-center justify-center gap-5 max-xl:mb-20 max-xl:pt-10 max-lg:mb-[10rem] max-lg:h-screen max-sm:mt-7 max-lg:landscape:mb-[14rem]"
    >
      <h1 className="mt-6 text-5xl font-extrabold text-primary max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Departemen</h1>
      <div className="h-auto w-full">
        <ul className={`${noto_sans.className} grid h-screen w-full grid-cols-3 place-items-center gap-y-5 text-2xl max-xl:text-xl max-sm:grid-cols-2 [&>li]:list-none`}>
          <DepartmentCard
            name="auditor"
            icon={`${URL}&id=${DEPARTMENTS_DATA['auditor'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="bpi"
            icon={`${URL}&id=${DEPARTMENTS_DATA['bpi'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="humas"
            icon={`${URL}&id=${DEPARTMENTS_DATA['humas'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-28 max-xl:h-[4rem] max-xl:w-[6rem] max-lg:h-[3rem] max-lg:w-[5rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[4rem]"
          />
          <DepartmentCard
            name="msdm"
            icon={`${URL}&id=${DEPARTMENTS_DATA['msdm'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="kki"
            icon={`${URL}&id=${DEPARTMENTS_DATA['kki'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="pmdb"
            icon={`${URL}&id=${DEPARTMENTS_DATA['pmdb'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="pa"
            icon={`${URL}&id=${DEPARTMENTS_DATA['pa'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="ti"
            icon={`${URL}&id=${DEPARTMENTS_DATA['ti'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:h-[8rem] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
          <DepartmentCard
            name="pb"
            icon={`${URL}&id=${DEPARTMENTS_DATA['pb'].logo}`}
            parentClassName="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary max-xl:h-[11rem] max-xl:w-[75%] max-lg:h-[11rem] max-lg:w-[70%] max-sm:col-span-2 max-sm:h-[8rem] max-sm:w-[35%] max-lg:landscape:h-[7rem] max-lg:landscape:w-[65%]"
            childClassName="relative h-20 w-20 max-xl:h-[4rem] max-xl:w-[4rem] max-lg:h-[3rem] max-lg:w-[3rem] max-lg:landscape:h-[2rem] max-lg:landscape:w-[2rem]"
          />
        </ul>
      </div>
    </section>
  );
}
