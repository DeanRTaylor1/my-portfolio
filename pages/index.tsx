import { About } from '@modules/common/Components/About';
import { Footer } from '@modules/common/Components/Footer';
import { Main } from '@modules/common/Components/Home';
import { Projects } from '@modules/common/Components/Projects';
import { Tools } from '@modules/common/Components/Tools';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </>
  );
}
