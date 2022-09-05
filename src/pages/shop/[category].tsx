import Head from 'next/head';
import Header from 'components/shop/Header';
import Main from 'components/shop/Main';
import Footer from 'components/shop/Footer';
import Overlay from 'components/shop/Overlay';
import dbConnect from 'utils/dbConnect';
import { getAllProducts } from 'server/services/products.services';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    { params: { category: 'ram' } },
    { params: { category: 'manitor' } },
    { params: { category: 'ssd' } },
    { params: { category: 'hard' } },
    { params: { category: 'motherboard' } },
    { params: { category: 'fan' } },
    { params: { category: 'case' } },
  ];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], getAllProducts);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      category: params?.category,
    },
  };
};

const Shop = ({ category }: { category: string }) => {
  return (
    <>
      <Head>
        <title>رکسوشاپ|فروشگاه</title>
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
      <Main category={category} />
      <Footer />
      <Overlay />
    </>
  );
};

export default Shop;
