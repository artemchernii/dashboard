import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lusitana = Lusitana({
  subsets: ['latin'],
  variable: '--font-lusitana',
  weight: ['400', '700'],
});

export { inter, lusitana };
