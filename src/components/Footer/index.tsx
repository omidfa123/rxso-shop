import { PlusSquareIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import { IconAddCircle } from '../../utils/Icons';
import Container from '../common/Container';
import Toman from '../common/Toman';

const Footer = () => {
  return (
    <Box
      as="footer"
      h="117px"
      mt={'24px'}
      pos="relative"
      zIndex={'999'}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        bg: '#fff',
        height: '46px',
        width: '100vw',
        zIndex: '-1',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        bottom: '0',
        right: '0',
        bg: '#fff',
        height: '117px',
        width: '40vw',
      }}
    >
      <Container>
        <Box
          h="100%"
          filter={'url(#round)'}
          _before={{
            content: '""',
            display: 'block',
            bgColor: '#fff',
            width: '100%',
            height: '117px ',
            mx: 'auto',
            clipPath:
              'polygon(53% 0, 100% 0, 100% 100%, 0 100%, 0 62%, 50% 65%);',
          }}
        />
        <Box h="100%" top="0%" width="44%" position="absolute">
          <Flex h="100%" width="100" pr={28} pt={6} alignItems="start">
            <Flex flexDir="column" pl={'54px'}>
              <Text
                color="textsecondary"
                fontWeight="medium"
                fontSize="sm"
                opacity="0.6"
              >
                مبلغ قابل پرداخت
              </Text>
              <Flex alignItems="baseline" gap="2">
                <Text color="primary.500" fontWeight="bold" fontSize="5xl">
                  ۳۸٫۹۳۰٫۰۰۰
                </Text>
                <Toman />
              </Flex>
            </Flex>
            <Flex pt={2} gap={6} alignItems="center">
              <Box pos="relative">
                <Button
                  display="flex"
                  alignItems={'center'}
                  justifyContent={'center'}
                  leftIcon={<IconAddCircle boxSize={6} />}
                  variant="unstyled"
                  aria-label="افزودن آیتم"
                  fontSize="xl"
                  fontWeight="semibold"
                  color="#1E385F"
                  transition={'all 0.2s ease-in-out'}
                  _hover={{
                    color: 'primary.500',
                  }}
                >
                  مشاهده لیست خرید
                </Button>
                <Badge
                  bgColor="secondary.700"
                  variant="solid"
                  w={'23px'}
                  h={'23px'}
                  borderRadius="50%"
                  // border={'1px solid #fff'}
                  display="flex"
                  pos={'absolute'}
                  alignItems="end"
                  justifyContent="center"
                  top="-14%"
                  right="-6%"
                  transition={'all 0.2s ease-in-out'}
                >
                  <Text as="span" fontSize="sm" color="white">
                    ۷
                  </Text>
                </Badge>
              </Box>
              <Button
                w={'10.125rem'}
                h={'2.75rem'}
                fontSize="xl"
                fontWeight="semibold"
                color="white"
                border="6px"
                bgColor="primary.500"
                _hover={{
                  bgColor: 'primary.600',
                  borderColor: 'primary.600',
                }}
                _active={{
                  bgColor: 'primary.700',
                  borderColor: 'primary.700',
                }}
              >
                افزودن به سبد خرید
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
