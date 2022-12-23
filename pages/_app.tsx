import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@modules/common/Layout/index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>dt.dev</title>
        <meta name='description' content='portfolio/@deanrtaylor1' />
        <meta property='og:title' content='dt.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='deanrtaylor1-portfolio' />
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' href='/logo-green.ico' />
      </Head>{' '}
      <Component {...pageProps} />
    </Layout>
  );
}
