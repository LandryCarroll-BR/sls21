import Head from 'next/head';
import Script from 'next/script';

export function SiteHead({ children }: any) {
  return (
    <>
      <Head>{children}</Head>
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
