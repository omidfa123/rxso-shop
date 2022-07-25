import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

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
