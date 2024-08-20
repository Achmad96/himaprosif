import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa6';

export default function SocialMedia() {
  return (
    <section className="flex h-fit w-[33%] flex-col gap-5 max-lg:mb-2 max-lg:w-[90%] max-lg:items-center max-sm:mb-5">
      <div className="flex flex-col font-extrabold max-sm:items-center">
        <h3 className="max-sm:text-md text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg">HIMAPROSIF</h3>
        <p className=" max-xl:text-xs">KABINET ESTUNGKARA 2024</p>
      </div>
      <div className="flex flex-col gap-3 max-sm:items-center">
        <p>Follow us</p>
        <div className="flex gap-5 pb-10 max-xl:gap-4 max-xl:pb-0">
          <Link href={'https://www.instagram.com/himaprosifuinsa/'} target="_blank">
            <FaInstagram className="h-10 w-10 max-xl:h-[35px] max-xl:w-[35px]" />
          </Link>
          <Link href={'https://twitter.com/himaprosif'} target="_blank">
            <FaXTwitter className="h-10 w-10 max-xl:h-[35px] max-xl:w-[35px]" />
          </Link>
          <Link href={'https://www.tiktok.com/@himaprosif'} target="_blank">
            <FaTiktok className="h-10 w-10 max-xl:h-[35px] max-xl:w-[35px]" />
          </Link>
          <Link href={'https://open.spotify.com/show/2xd0mxvjK042bUcIwtfCKn?si=c1f7a1b3b36e498c'} target="_blank">
            <FaSpotify className="h-10 w-10 max-xl:h-[35px] max-xl:w-[35px]" />
          </Link>
          <Link href={'https://www.youtube.com/@himaprosifuinsa7486'} target="_blank">
            <FaYoutube className="h-10 w-10 max-xl:h-[35px] max-xl:w-[35px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
