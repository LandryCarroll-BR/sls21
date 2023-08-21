import Head from 'next/head';
import Script from 'next/script';
import { RawHtml } from '../raw-html/raw-html';

export function SiteHead({ children }: { children: any }) {
  return (
    <>
      <Head>
        <RawHtml html={children} />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DVHXW75DC3" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DVHXW75DC3');
        `}
      </Script>
    </>
  );
}
