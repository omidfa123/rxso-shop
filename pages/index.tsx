import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/custom/Footer';
import Header from '../src/components/custom/Header';
import Main from '../src/components/custom/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>رکسو شاپ | مرجع خرید قطعات کامپیوتر</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
