import { Box, Button, Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Toman from '../common/Toman';
import useStore from '../../stores/products';
interface Iproduct {
  _id: number;
  name: string;
  price: number;
  image: string;
  image2: string;
  thumbnail: string;
  englishName: string;
  createdAt: string;
}

const Products = () => {
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
    <Box h="100%">
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
            cursor="pointer"
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
            <Flex gap={1} alignItems="baseline">
              <Text color="primary.500" fontWeight="bold" fontSize="2xl" mb={4}>
                {item.price.toLocaleString('fa-IR').replace(/٬/g, '٫')}
              </Text>
              <Toman bgColor="#fff" />
            </Flex>
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
                color: 'secondary.500',
                borderColor: 'secondary.500',
              }}
              _active={{
                color: 'secondary.700',
                borderColor: 'secondary.700',
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

export default Products;
