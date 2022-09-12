import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
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
  return (
    <VStack
      display={['none', 'none', 'flex']}
      bgColor="#F2F6FB"
      borderRadius={8}
      py={6}
      px={4}
      w="325px"
      h="633px"
      spacing="0"
      textAlign="center"
    >
      <Text fontWeight="semibold" fontSize="1rem">
        {product.name}
      </Text>
      <Text
        fontWeight="regular"
        fontSize="13px"
        color="textsecondary"
        opacity=".6"
      >
        {product.englishName}
      </Text>
      <Box as="span" blendMode={'multiply'} pos="relative" w="200px" flex="1">
        <Image
          src={product.image2}
          alt={product.name}
          layout="fill"
          placeholder="blur"
          blurDataURL={product.image}
        />
      </Box>
      <VStack
        color="textsecondary"
        fontSize="xl"
        alignSelf="start"
        alignItems="start"
        w="full"
        spacing={4}
      >
        <Text color="#879DBF" fontSize="13px" alignSelf="center">
          RXS-8206985
        </Text>
        <Divider />
        <Flex flexDir="column" gap="6px">
          {details.map((item: any) => (
            <HStack key={item.description}>
              <Text opacity=".6">{item.description}</Text>
              <Text>{item.value}</Text>
            </HStack>
          ))}
        </Flex>
        <VStack
          color="textsecondary"
          fontWeight="medium"
          fontSize="xl"
          w="full"
          spacing={5}
        >
          <HStack justifyContent="space-between" w="full">
            <Text alignSelf={'flex-start'}> رنگ بندی: مشکی</Text>
            <Price price={product.price} />
          </HStack>
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
    </VStack>
  );
};

export default SingleProduct;
