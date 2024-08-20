import SocialMedia from '@/components/layout/footer/social-media.footer';
import Location from '@/components/layout/footer/location.footer';
import Contact from '@/components/layout/footer/contact-form.footer';

export default function Footer() {
  return (
    <footer className="max-lg:h-max-[60dvh] mt-10 flex w-full flex-col items-center justify-center gap-5 rounded-t-[3rem] bg-secondary px-10 max-lg:h-auto max-sm:h-[50%]">
      <main className="flex h-full w-full items-center justify-between border-b py-5 max-lg:flex-col-reverse max-sm:w-full">
        <SocialMedia />
        <Location />
        <Contact />
      </main>
      <h3 className="max-lg:text-md max-md:text-md max-sm:text-md text-xl max-xl:text-xs max-sm:mb-2 max-sm:w-72 max-sm:text-center ">© 2024 HIMAPROSIF Kabinet Estungkara</h3>
    </footer>
  );
}
