import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import useStore from 'stores/products';
import { PriceIcon } from 'components/common/Icons';
import { persianPrice } from 'utils/persianPrice';

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
}

const Product = () => {
  const store = useStore();

  const clickHandler = (id: number) => {
    store.products.find((product: Iproduct) => {
      if (product._id === id) {
        store.setSingleProduct(product);
      }
    });
  };

  useEffect(() => {
    axios.get('/api/products').then(res => {
      store.setProducts(res.data.data);
    });
  }, []);
  return (
    <Box w="calc(100% - 334px)" h="100%">
      <SimpleGrid
        columns={6}
        spacing={2}
        h={'87%'}
        overflow="auto"
        pl={'10px'}
        pt="2px"
        pr="2px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            background: '#B6C5DC',
            borderRadius: '7px',
            opacity: '0.5',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#879DBF',
            borderRadius: '7px',
            opacity: '0.7',
            borderRight: 'none',
            borderLeft: 'none',
          },
          ' &::-webkit-scrollbar-track-piece:end': {
            background: '#B6C5DC',
            borderRadius: '7px',
            opacity: '0.5',
            marginBottom: '-82px',
          },
        }}
      >
        {store.products.map((item: Iproduct) => (
          <Flex
            key={item._id}
            flexDir="column"
            bg="white"
            w="100%"
            h="273px"
            borderRadius={8}
            onClick={() => clickHandler(item._id)}
            position="relative"
            align={'center'}
            outline={
              store.singleProduct._id === item._id
                ? ' #F44A69 solid 2px '
                : 'none'
            }
          >
            <Box pos="absolute" top="10px">
              <Image
                src={item.image}
                alt="cart"
                height={98}
                width={98}
                placeholder={'blur'}
                blurDataURL={item.image}
              />
            </Box>
            <Divider
              flexBasis="110px"
              borderColor="#D9DCF3"
              w="106px"
              mb="10px"
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              color="#000"
              textAlign="center"
              w="106px"
              flexBasis="80px"
            >
              {item.englishName}
            </Text>
            <HStack spacing="5px" mb={4}>
              <Text color="primary.500" fontWeight="bold" fontSize="2xl">
                {persianPrice(item.price)}
              </Text>
              <PriceIcon boxSize="18px" />
            </HStack>
            <Button
              variant="outline"
              color="secondary.500"
              borderColor="secondary.500"
              fontSize="sm"
              w="106px"
              h="32px"
              borderRadius={6}
              mb="12px"
              _hover={{
                color: '#fff',
                borderColor: 'secondary.500',
                bgColor: 'secondary.500',
              }}
              _active={{
                color: '#fff',
                borderColor: 'secondary.700',
                bgColor: 'secondary.700',
              }}
              onClick={() => {
                store.addToCart(item);
              }}
            >
              افزودن به لیست
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Product;
