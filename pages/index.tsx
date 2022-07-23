import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DarkModeSwitch from '../src/components/custom/DarkModeSwitch';
import Header from '../src/components/custom/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>رکسو شاپ | مرجع خرید قطعات کامپیوتر</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
