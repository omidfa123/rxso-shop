import { Box, Center, Container, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import LandingSlider from 'components/home/LandingSlider';
import Head from 'next/head';
import Header from 'components/home/Header';
import Features from 'components/home/Features';
import CallToActionSection from 'components/home/CallToActionSection';
import { useSession } from 'next-auth/react';
const Home = () => {
  const { data, status } = useSession();

  console.log(data, status);
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
      <Box w="full" minH="100vh" bg="#F4F9FF">
        <Header />
        <Container
          as="main"
          maxW="1440"
          overflow="hidden"
          p="0"
          pos="relative"
          _before={{
            content: "''",
            w: '50%',
            h: '36%',
            pos: 'absolute',
            top: '24%',
            left: '-18%',
            pointerEvents: 'none',
            bgImage:
              "url('https://res.cloudinary.com/rixso/image/upload/v1661880456/rixsoShop/landingSlider/pattern_hbwqdl.png')",
            bgSize: 'contain',
          }}
          _after={{
            content: "''",
            w: '50%',
            h: '36%',
            pos: 'absolute',
            top: '10%',
            overflow: 'none',
            right: '-18%',
            pointerEvents: 'none',
            bgImage:
              "url('https://res.cloudinary.com/rixso/image/upload/v1661880456/rixsoShop/landingSlider/pattern_hbwqdl.png')",
            bgSize: 'contain',
            bgRepeat: 'no-repeat',
          }}
        >
          <LandingSlider />
          <CallToActionSection />
          <Features />
          <Center
            as="footer"
            h="57px"
            bgColor="white"
            px={4}
            py={8}
            textAlign="center"
          >
            <Text color="#879DBF" fontSize="14px">
              استفاده از مطالب فروشگاه اینترنتی ریکسوشاپ فقط برای مقاصد غیرتجاری
              و با ذکر منبع بلامانع است.
            </Text>
          </Center>
        </Container>
      </Box>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {},
  };
};
