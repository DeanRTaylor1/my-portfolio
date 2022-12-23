import { About } from '@modules/common/Components/About';
import { Footer } from '@modules/common/Components/Footer';
import { Main } from '@modules/common/Components/Home';
import { Projects } from '@modules/common/Components/Projects';
import { Tools } from '@modules/common/Components/Tools';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>dt.dev</title>
        <meta name='description' content='portfolio/@deanrtaylor1' />
        <meta property='og:title' content='dt.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='deanrtaylor1-portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo-green.ico' />
      </Head>

      <Main />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </>
  );
}
