import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Location() {
  return (
    <section className="flex flex-col max-sm:my-8">
      <p className="font-extrabold">Lokasi:</p>
      <div className="flex items-start gap-3">
        <FaMapMarkerAlt className="mt-2" />
        <div className="flex flex-col gap-3">
          <p className="w-56 max-lg:w-[30rem] max-sm:w-[15rem] max-lg:landscape:w-56">Jl. Dr. Ir. H. Soekarno No.682, Gn. Anyar, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294</p>
          <Link href={'https://maps.app.goo.gl/nD1LnKPAeNfD1eZS6'} className="flex items-center font-extrabold underline max-xl:text-xs" target="_blank">
            Lihat di Peta
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
