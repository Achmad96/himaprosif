'use client';
import { Variants, motion } from 'framer-motion';

const heroContentVariants: Variants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      type: 'spring',
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.3,
      stiffness: 300,
      damping: 50,
    },
  },

  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: { type: 'spring', stiffness: 300, damping: 50 },
  },
  closed: { opacity: 0, y: '100%' },
};

export default function HeroContent() {
  return (
    <div className="flex w-[30%] flex-col gap-20 max-2xl:mt-[3.5rem] max-2xl:w-[40%] max-2xl:gap-0 max-xl:w-[50%] max-lg:w-[100%] max-sm:w-[85%]">
      <div className="overflow-hidden">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            stiffness: 300,
            damping: 50,
          }}
          animate={{
            opacity: 1,
          }}
          className="text-5xl font-extrabold text-primary max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl"
        >
          Visi
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            delay: 0.3,
            stiffness: 300,
            damping: 50,
          }}
          animate={{
            opacity: 1,
          }}
          className="py-6 text-justify"
        >
          Menjadikan HIMAPROSIF sebagai pilar utama mahasiswa di Program Studi Sistem Informasi yang bertujuan untuk menciptakan organisasi yang aktif, kreatif dan inovatif dalam rangka menciptakan
          generasi yang profesional, religius dan berkualitas untuk berkontribusi kepada masyarakat.
        </motion.p>
      </div>
      <div>
        <motion.h1 initial={'closed'} animate={'open'} variants={heroContentVariants} className="text-5xl font-extrabold text-primary max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
          Misi
        </motion.h1>
        <motion.ul initial={'closed'} animate={'open'} variants={heroContentVariants} className="ml-5 flex flex-col gap-2 py-6 text-justify">
          <motion.li variants={itemVariants}>Membangun hubungan secara internal dan eksternal untuk menciptakan lingkungan sosial yang baik dan rasa kekeluargaan.</motion.li>
          <motion.li variants={itemVariants}>
            Meningkatkan semangat silaturahmi atas dasar kekeluargaan dan religius Membangun kreativitas dan inovasi yang secara aktif mencari solusi atas kebutuhan Program Studi Sistem Informasi.
          </motion.li>
          <motion.li variants={itemVariants}>Membangun kreativitas dan inovasi yang secara aktif mencari solusi atas kebutuhan Program Studi Sistem Informasi.</motion.li>
          <motion.li variants={itemVariants}>Menciptakan ruang yang nyaman untuk berekspresi bagi para siswa dengan prinsip keterbukaan dan saling toleransi.</motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
