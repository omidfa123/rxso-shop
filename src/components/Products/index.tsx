import { Box, Button, Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import Toman from '../common/Toman';

const Products = () => {
  const [active, setActive] = useState();
  return (
    <Box h="100%">
      <SimpleGrid
        columns={6}
        spacing={2}
        h={'87%'}
        overflow="auto"
        pl={'10px'}
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
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item, index) => (
          <Flex
            key={index}
            flexDir="column"
            bg="white"
            w="100%"
            h="273px"
            borderRadius={8}
            onClick={() => {}}
            position="relative"
            align={'center'}
          >
            <Box pos="absolute" top="10px">
              <Image
                src="/assets/img/download.jpg"
                alt="cart"
                height={98}
                width={98}
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
              AFOX GeForce GT730 2GB DDR3 Graphics Card
            </Text>
            <Flex gap={1} alignItems="baseline">
              <Text color="primary.500" fontWeight="bold" fontSize="2xl" mb={4}>
                ۱٫۸۸۰٫۰۰۰
              </Text>
              <Toman bgColor="#fff" />
            </Flex>
            <Button
              variant="outline"
              color="secondary.500"
              borderColor="secondary.500"
              fontSize="sm"
              w="106px"
              h="30px"
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
