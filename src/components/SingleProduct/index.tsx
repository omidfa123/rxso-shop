import {
  Box,
  Button,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import Price from '../Price';
import useStore from 'stores/products';
import AddProduct from './AddProduct';

const SingleProduct = () => {
  const store = useStore();
  const [selected, setSelected] = useState('1');

  return (
    <Flex
      bgColor="#F2F6FB"
      h="100%"
      w="334px"
      borderRadius={8}
      flexDir="column"
      px="14px"
      py="22px"
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="start"
        flexDir="column"
        pos="-webkit-sticky"
      >
        <Box textAlign="center" flexBasis="250px">
          <Text fontWeight="semibold" fontSize="1rem">
            {store.singleProduct.name}
          </Text>
          <Text
            fontWeight="regular"
            fontSize="sm"
            color="textsecondary"
            opacity=".6"
          >
            {store.singleProduct.englishName}
          </Text>
        </Box>
        <Box
          blendMode={'multiply'}
          pos="absolute"
          top="16%"
          w={'245px'}
          height={'245px'}
        >
          <Image
            src={store.singleProduct.image2}
            alt={store.singleProduct.name}
            layout="fill"
            placeholder="blur"
            blurDataURL={store.singleProduct.image2}
          />
        </Box>
        <Text color="#879DBF" fontSize="sm" fontWeight="regular">
          RXS-8206985
        </Text>
      </Flex>
      <Divider mb="18px" />
      <Flex
        color="textsecondary"
        fontWeight="regular"
        fontSize="xl"
        flexDir="column"
        gap="14px"
        mb={'30px'}
      >
        {[
          { description: 'توان مصرفی:', value: 'خیر' },
          { description: 'خنک کننده:', value: 'خیر' },
          { description: 'حجم حافظه گرافیکی:', value: 'DDR5' },
          { description: 'مدل پردازنده:', value: 'RTX2080' },
          { description: 'پردازنده گرافیکی:', value: 'Nvidia' },
        ].map(item => (
          <Flex key={item.description} gap={1}>
            <Text opacity=".6">{item.description}</Text>
            <Text>{item.value}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex
        color="textsecondary"
        fontWeight="medium"
        fontSize="xl"
        flexDir="column"
        gap="10  px"
        mb={'30px'}
      >
        <Flex gap={1}>
          <Text>رنگبندی:</Text>
          <Text>مشکی</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={'10px'}>
          <RadioGroup onChange={setSelected}>
            <Stack spacing={2} direction="row">
              <Radio
                bgColor="green.600"
                colorScheme="green.600"
                ringColor="gray.600"
                value="1"
                size="lg"
                border="1px solid #DBE3EF"
              />
              <Radio
                bgColor="gray.600"
                colorScheme="gray.600"
                value="2"
                size="lg"
                border="1px solid #DBE3EF"
              />
            </Stack>
          </RadioGroup>
          <Price />
        </Flex>
        {store.cart.length ? (
          <AddProduct width="140px" showCart product={store.singleProduct} />
        ) : (
          <Button
            top="-9%"
            bgColor="secondary.500"
            fontWeight="semibold"
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
      </Flex>
    </Flex>
  );
};

export default SingleProduct;
