import '../../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '../styles/globals.css';
import { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} key={router.asPath} />
      </div>
    </FaustProvider>
  );
}
