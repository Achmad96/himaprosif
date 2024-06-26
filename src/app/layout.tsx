import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactElement } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

const poppins = Poppins({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Estungkara',
  description: 'himaprosif 2024 cabinet',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function Root({ children }: { children: ReactElement }) {
  return (
    <html>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
