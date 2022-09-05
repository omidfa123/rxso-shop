import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import Price from '../Price';
import useStore from 'store/products';
import AddProduct from './AddProduct';

interface Iproduct {
  category: string;
  _id: number;
  name: string;
  price: number;
  image: string;
  image2: string;
  thumbnail: string;
  englishName: string;
  createdAt: string;
  __v: number;
}

const details = [
  { description: 'توان مصرفی:', value: 'خیر' },
  { description: 'خنک کننده:', value: 'خیر' },
  { description: 'حجم حافظه گرافیکی:', value: 'DDR5' },
  { description: 'مدل پردازنده:', value: 'RTX2080' },
  { description: 'پردازنده گرافیکی:', value: 'Nvidia' },
];

const SingleProduct = ({ product }: { product: Iproduct }) => {
  const store = useStore();
  const [selected, setSelected] = useState('1');

  return (
    <VStack bgColor="#F2F6FB" borderRadius={8} py={6} px={4} w="325px">
      <Text fontWeight="semibold" fontSize="1rem">
        {product.name}
      </Text>
      <Text
        fontWeight="regular"
        fontSize="sm"
        color="textsecondary"
        opacity=".6"
      >
        {product.englishName}
      </Text>
      <Box as="span" blendMode={'multiply'} pos="relative" w="248px" h="200px">
        <Image
          src={product.image2}
          alt={product.name}
          layout="fill"
          placeholder="blur"
          blurDataURL={product.image2}
        />
      </Box>
      <Text color="#879DBF" fontSize="sm" fontWeight="regular">
        RXS-8206985
      </Text>
      <Divider />
      <VStack
        color="textsecondary"
        fontWeight="regular"
        fontSize="xl"
        alignSelf="start"
        alignItems="start"
      >
        {details.map((item: any) => (
          <HStack key={item.description}>
            <Text opacity=".6">{item.description}</Text>
            <Text>{item.value}</Text>
          </HStack>
        ))}
      </VStack>
      <VStack color="textsecondary" fontWeight="medium" fontSize="xl" w="full">
        <Text> رنگ بندی: مشکی</Text>
        <Price />
        {store.cart.length ? (
          <AddProduct width="140px" showCart product={store.singleProduct} />
        ) : (
          <Button
            bgColor="secondary.500"
            fontWeight="semibold"
            w="100% !important"
            fontSize="xl"
            color="#fff"
            _hover={{ backgroundColor: 'secondary.500' }}
            _active={{ bg: 'secondary.700' }}
            onClick={() => {
              store.addToCart(store.singleProduct);
              store.setCount(store.singleProduct, 'add');
            }}
          >
            افزودن به لیست
          </Button>
        )}
      </VStack>
    </VStack>
  );
};

export default SingleProduct;
