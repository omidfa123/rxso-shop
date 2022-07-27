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

const SingleProduct = () => {
  const [selected, setSelected] = useState('1');
  return (
    <Flex
      bgColor="#F2F6FB"
      h="100%"
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
        <Box textAlign="center" flexBasis="220px">
          <Text fontWeight="semibold" fontSize="1rem">
            کارت گرافیک انویدیاRTX2080
          </Text>
          <Text
            fontWeight="regular"
            fontSize="sm"
            color="textsecondary"
            opacity=".6"
          >
            NVIDIA GeForce RTX 2080 Ti Founders Edition
          </Text>
        </Box>
        <Box blendMode={'multiply'} pos="absolute" top="10%">
          <Image
            src="/assets/img/cart.jpg"
            alt="cart"
            // layout="responsive"
            height={296}
            width={245}
          />
        </Box>
        <Text color="#879DBF" fontSize="sm" fontWeight="regular" mb="18px">
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
        ].map((item, index) => (
          <Flex key={index} gap={1}>
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
        <Button
          bgColor="secondary.500"
          _hover={{ backgroundColor: 'secondary.500' }}
          _active={{ bg: 'secondary.700' }}
        >
          <Text fontWeight="semibold" fontSize="xl" color="#fff">
            افزودن به لیست
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SingleProduct;
