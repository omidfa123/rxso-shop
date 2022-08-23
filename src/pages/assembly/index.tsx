import {
  Box,
  Container,
  HStack,
  IconButton,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';
import { PinIcon, MinusIcon } from 'components/common/Icons';

const Assembly: NextPage = () => {
  return (
    <Box w="full" minH="100vh" bgColor="#F4F9FF">
      <Box bgColor="rgba(255,255,255,.3)">
        <Container maxW="1013px">
          <HStack py={[4, 6, 7]} justify="space-between" align="center">
            <Image
              src="/assets/img/logo.png"
              alt="رکسو شاپ"
              height={38}
              width={129}
            />
            <IconButton
              icon={<MinusIcon boxSize="24px" />}
              aria-label="منو"
              isRound={true}
              position="fixed"
              top={[3, 5]}
              left={['6%', '10%', '16%']}
              minW={[10, '3rem']}
              h={[10, '3rem']}
              p={[0, 3]}
              _hover={{
                bg: '#fff',
                transform: 'scale(5000)',
                transition: 'all 0.3s ease-in-out',
              }}
              _active={{ bg: '#eee' }}
              _after={{
                content: '""',
                position: 'absolute',
                top: '2rem',

                w: '1.5rem',
                h: '3px',
                bg: 'textsecondary',
                borderRadius: 'inherit',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: '1rem',
                w: '1.5rem',
                h: '3px',
                bg: 'textsecondary',
                borderRadius: 'inherit',
              }}
            />

            <VStack
              as="ul"
              pos="absolute"
              __css={{
                '&': { listStyle: 'none' },
                '&:hover *': { textDecoration: 'none' },
              }}
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="textsecondary"
            >
              <Box as="li">
                <Link href="/" passHref>
                  <ChakraLink>صفحه اول</ChakraLink>
                </Link>
              </Box>
              <Box as="li">
                <Link href="/" passHref>
                  <ChakraLink>تماس با ما</ChakraLink>
                </Link>
              </Box>
              <Box as="li">
                <Link href="/" passHref>
                  <ChakraLink>درباره ما</ChakraLink>
                </Link>
              </Box>
              <Box as="li">
                <Link href="/" passHref>
                  <ChakraLink>دست دوم</ChakraLink>
                </Link>
              </Box>
              <Box as="li">
                <Link href="/" passHref>
                  <ChakraLink color="secondary.500" fontWeight="semibold">
                    <PinIcon boxSize="16px" ml="4px" />
                    محصولات ویژه
                  </ChakraLink>
                </Link>
              </Box>
            </VStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Assembly;
