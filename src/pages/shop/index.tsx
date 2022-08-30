import Head from 'next/head';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Overlay from 'components/common/Overlay';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Select,
  SelectField,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { DropdownIcon, FilterIcon } from 'components/common/Icons';
import Products from 'components/Product';
import SingleProduct from 'components/SingleProduct';
import uesStore from 'stores/products';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category } = query;
  return {
    props: {
      category,
    },
  };
};

const Shop = () => {
  const store = uesStore();
  const { isOpen, onClose, onOpen } = useDisclosure();
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
      <VStack
        as="main"
        h="640px"
        w="1191px"
        mx="auto"
        spacing={'1.2rem'}
        zIndex="20"
        pos="relative"
      >
        <HStack spacing={4} alignSelf="start">
          <Select
            icon={<DropdownIcon />}
            bgColor="white"
            w="max-content"
            h="2.75rem"
            fontSize={'xl'}
            css={{
              '& + .css-116fcjy': { right: 'unset', left: '.5rem' },
            }}
            onChange={e => store.sortProducts(e.target.value)}
            color="textsecondary"
          >
            <option value="lowest">ارزان‌ترین به گران‌ترین</option>
            <option value="highest">گران‌ترین به ارزان‌ترین</option>
            <option value="newest">جدیدترین به قدیمی‌ترین</option>
            <option value="original">قدیمی‌ترین به جدیدترین</option>
          </Select>
          <Button
            bg="white"
            color={'textsecondary'}
            h="2.75rem"
            fontSize={'xl'}
            fontWeight={'regular'}
            leftIcon={<FilterIcon />}
            onClick={onOpen}
          >
            فیلتر محصولات
          </Button>
        </HStack>
        <HStack h="full" w="full" spacing={6}>
          <Products />
          <SingleProduct />
        </HStack>
      </VStack>

      <Footer />
      <Overlay />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" mb={8}>
            فیلتر کردن محصولات
          </DrawerHeader>

          <DrawerBody>
            <SelectField
              w={'90%'}
              h={'2.75rem'}
              p={2}
              name="type"
              border="1px"
              borderColor="textsecondary"
              borderRadius="6px"
              onChange={e => store.categoryProducts(e.target.value)}
            >
              <option value="all">همه محصولات</option>
              <option value="ram">رم</option>
              <option value="manitor">مانیتور</option>
              <option value="hard">هارد</option>
              <option value="case">کیس</option>
              <option value="fan">فن</option>
              <option value="motherboard">مادربورد</option>
            </SelectField>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Shop;
