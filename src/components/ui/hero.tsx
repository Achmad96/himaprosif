import Image from 'next/image';
import Estungkara from '$/images/icons/estungkara.png';
import HeroContent from '@/components/ui/hero-content';

export default function Hero() {
  return (
    <section
      id="about"
      className="flex h-auto min-h-screen w-full items-center justify-center gap-52 max-2xl:px-5 max-xl:gap-32 max-lg:h-auto max-lg:flex-col max-lg:gap-10 max-sm:h-[90%] max-sm:gap-8 max-lg:landscape:h-[50%]"
    >
      <div className="max-lg: flex flex-col items-center gap-10 max-lg:translate-y-10 max-lg:flex-row max-sm:flex max-sm:flex-row-reverse max-sm:gap-0">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="text-6xl font-extrabold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">HIMAPROSIF</h1>
          <h1 className="w-fit text-3xl font-extrabold text-primary max-xl:text-2xl max-lg:text-xl max-sm:text-xs">KABINET ESTUNGKARA 2024</h1>
        </div>
        <div className="flex items-end">
          <div className="relative h-[25rem] w-[19.5rem] max-xl:h-[22rem] max-xl:w-[16.5rem] max-lg:h-[16rem] max-lg:w-[10.5rem] max-md:h-[10rem] max-md:w-[7.5rem] max-sm:h-[10rem] max-sm:w-[7.5rem]">
            <Image
              src={Estungkara}
              alt="Estungkara"
              className="drop-shadow-[5px_5px_5px_#044d28]"
              fill={true}
              sizes="(max-width: 640px) 65vw, (max-width: 768px) 80vw, (max-width: 1024px) 95vw, 100vw"
              priority={true}
            />
          </div>
          <div className="flex font-extrabold text-white max-xl:font-semibold max-lg:my-16 max-lg:rotate-90 max-lg:font-semibold max-md:rotate-0 max-sm:my-0 max-sm:-mr-[7rem] max-sm:ml-[7rem]">
            <span className="my-auto text-7xl max-xl:text-6xl max-lg:text-5xl max-sm:text-2xl">#</span>
            <p className="w-10 text-3xl max-xl:w-7 max-xl:text-2xl max-lg:w-4 max-lg:text-xl max-md:text-xs max-sm:w-0 max-sm:text-sm">Tumbuh berdaya</p>
          </div>
        </div>
      </div>
      <HeroContent />
    </section>
  );
}
