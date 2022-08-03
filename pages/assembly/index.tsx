import { Box, Container, HStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';

const Assembly: NextPage = () => {
  return (
    <Box w="full" minH="100vh" bgColor="#F4F9FF">
      <Box bgColor="white">
        <Container maxW="1013px">
          <HStack spacing={4}>
            <Image
              src="/assets/img/logo.png"
              alt="رکسو شاپ"
              height={30}
              width={102}
            />
            <HStack spacing={4}>
              <Text as="span" fontSize="sm">
                صفحه اصلی
              </Text>
              <Text as="span" fontSize="sm">
                تماس با ما
              </Text>
              <Text as="span" fontSize="sm">
                درباره ما
              </Text>
              <Text as="span" fontSize="sm">
                دست دوم
              </Text>
              <Text as="span" fontSize="sm">
                محصولات ویژه
              </Text>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Assembly;
