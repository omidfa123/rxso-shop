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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="فروشگاه دیجیتال برای خرید قطعات کامپیوتر"
        />
        <meta
          name="keywords"
          content="قطعات کامپیوتر, قطعات کامپیوتر خرید, قطعات کامپیوتر برای خرید, اسمبل انلاین"
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
