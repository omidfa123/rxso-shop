import {
  Box,
  Button,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import useStore from 'store/products';
import { PriceIcon } from 'components/common/Icons';
import { persianPrice } from 'utils/persianPrice';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SingleProduct from '../SingleProduct';

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

const Product = ({ category }: { category: string }) => {
  const store = useStore();
  const { data } = useQuery<Iproduct[] | any>(['products'], () =>
    axios.get('/api/Products')
  );
  const filterByCategory = data?.filter(
    (product: Iproduct) => product.category == category
  );
  const [selected, setSelected] = useState<Iproduct>(filterByCategory[0]);

  const handleClick = (id: number) => {
    data.find((product: Iproduct) => {
      product._id === id && setSelected(product);
    });
  };

  return (
    <HStack h="full" w="full" spacing={6}>
      <Box w="calc(100% - 334px)" h="100%">
        <SimpleGrid
          columns={6}
          spacing={2}
          h={'89%'}
          overflow="auto"
          pl={'10px'}
          py="3px"
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
          {filterByCategory.map((item: Iproduct) => (
            <VStack
              key={item._id}
              bg="white"
              h="273px"
              borderRadius={8}
              p={3}
              onClick={() => handleClick(item._id)}
              outline={
                item._id === selected?._id ? ' #F44A69 solid 2px ' : 'none'
              }
            >
              <Box as="span" position="relative" w="98px" h="98px">
                <Image
                  src={item.image}
                  alt={item.englishName}
                  placeholder={'blur'}
                  layout="fill"
                  blurDataURL={item.image}
                />
              </Box>
              <VStack flexGrow="1">
                <Divider borderColor="#D9DCF3" />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  color="#000"
                  textAlign="center"
                >
                  {item.englishName}
                </Text>
              </VStack>
              <HStack>
                <Text color="primary.500" fontWeight="bold" fontSize="2xl">
                  {persianPrice(item.price)}
                </Text>
                <PriceIcon boxSize="18px" />
              </HStack>
              <Button
                variant="outline"
                size="sm"
                w="full"
                minH="30px"
                h="30px"
                color="secondary.500"
                borderColor="secondary.500"
                _hover={{
                  color: '#fff',
                  bgColor: 'secondary.500',
                }}
                _active={{
                  color: '#fff',
                  borderColor: 'secondary.700',
                  bgColor: 'secondary.700',
                }}
                onClick={() => {
                  store.addToCart(item);
                  store.setCount(item, 'add');
                }}
              >
                افزودن به لیست
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
      <SingleProduct product={selected} />
    </HStack>
  );
};

export default Product;
