import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';
import I18n from '../lib/i18n';
import Layout from '../components/layout';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        this.navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function(err) {
            console.log('Service Worker registration failed: ', err);
          }
        )
      })
    }

    if (process.env.NODE_ENV == 'development') {
      console.warn('[DEV] directive of Content Security Policy is fixed for production.');
    }
  }, [])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRAKING_ID}`}
        crossOrigin="anonymous"
      />
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function g(){dataLayer.push(arguments)};g('js',new Date());g('config','${gtag.GA_TRAKING_ID})',{page_path:window.location.pathname});`
        }}
      />
      <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18n>
    </>
  )
}

export default App;
