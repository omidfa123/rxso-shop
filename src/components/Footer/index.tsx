import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/future/image';
import AddProduct from '../SingleProduct/AddProduct';
import useStore from 'stores/products';
import {
  MinusCircleIcon,
  AddCircleIcon,
  PriceIcon,
} from 'components/common/Icons';

const Footer = () => {
  const store = useStore();
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
      <Container maxWidth="1440px" h="100%" mx="auto" pos="relative">
        <Button
          pos={'absolute'}
          zIndex={'999'}
          display={store.isCartOpen || store.cart.length > 0 ? 'none' : 'block'}
          left={'9.16%'}
          top="-9%"
          bgColor="secondary.500"
          fontWeight="semibold"
          w={'21%'}
          fontSize="xl"
          color="#fff"
          _hover={{ backgroundColor: 'secondary.500' }}
          _active={{ bg: 'secondary.700' }}
          onClick={() => store.addToCart(store.singleProduct)}
        >
          افزودن به لیست
        </Button>
        <Box
          pos={'absolute'}
          zIndex={'999'}
          display={
            !store.isCartOpen && store.cart.length > 0 ? 'block' : 'none'
          }
          left={'12%'}
          top="-14%"
        >
          <AddProduct width="140px" showCart />
        </Box>
        <Box
          h="100%"
          filter={'url(#round)'}
          boxShadow={' 0px -4px 50px rgba(0, 0, 0, 0.06)'}
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
                  {store.cart
                    .reduce((acc, item) => (acc + item.price) * store.count, 0)
                    .toLocaleString('fa-IR')
                    .replace(/٬/g, '٫')}
                </Text>
                <PriceIcon />
              </Flex>
            </Flex>
            <Flex pt={2} gap={6} alignItems="center">
              <Box pos="relative">
                <Button
                  display="flex"
                  alignItems={'center'}
                  justifyContent={'center'}
                  leftIcon={
                    store.isCartOpen ? (
                      <MinusCircleIcon boxSize={6} />
                    ) : (
                      <AddCircleIcon boxSize={6} />
                    )
                  }
                  variant="unstyled"
                  aria-label="افزودن آیتم"
                  fontSize="xl"
                  fontWeight="semibold"
                  color="#1E385F"
                  transition={'all 0.2s ease-in-out'}
                  _hover={{
                    color: 'primary.500',
                  }}
                  onClick={() =>
                    store.isCartOpen
                      ? store.setIsCartOpen(false)
                      : store.setIsCartOpen(true)
                  }
                >
                  {store.isCartOpen ? ' بستن لیست خرید' : 'مشاهد لیست خرید'}
                </Button>
                {store.cart.length > 0 && (
                  <Badge
                    bgColor="secondary.700"
                    variant="solid"
                    w={'23px'}
                    h={'23px'}
                    borderRadius="50%"
                    display="flex"
                    pos={'absolute'}
                    alignItems="end"
                    justifyContent="center"
                    top="-14%"
                    right="-6%"
                    transition={'all 0.2s ease-in-out'}
                  >
                    <Text as="span" fontSize="sm" color="white">
                      {store.cart.length.toLocaleString('fa-IR')}
                    </Text>
                  </Badge>
                )}
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
                  bgColor: 'primary.800',
                  borderColor: 'primary.800',
                }}
                _active={{
                  bgColor: 'primary.700',
                  borderColor: 'primary.700',
                }}
              >
                {store.isCartOpen ? 'تکمیل فرایند خرید' : 'افزودن به سبد خرید '}
              </Button>
            </Flex>
          </Flex>
          <Box
            position="absolute"
            bottom="0"
            right="12%"
            zIndex="-1"
            w="614px"
            h="640px"
            rounded="30px"
            bgColor="white"
            pt={8}
            pr={8}
            overflowY="auto"
            display={store.isCartOpen ? 'block' : 'none'}
            transition={'all .3s ease-in-out'}
          >
            <Box>
              {store.cart.map(item => (
                <div key={item.name}>
                  <HStack spacing={8} w="100%" pl={6}>
                    <VStack spacing={2}>
                      <Image
                        src={item.image}
                        height={60}
                        width={60}
                        alt={item.name}
                      />
                      <Text fontSize="xs" color="textsecondary" opacity=".6">
                        {item.category}
                      </Text>
                    </VStack>
                    <VStack spacing={2} alignItems="start">
                      <Text fontSize="xl" color="textprimary">
                        {item.name}
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="light"
                        color="textsecondary"
                        opacity=".6"
                        lineHeight="16.8px"
                      >
                        {item.englishName}
                      </Text>
                      <HStack spacing={2}>
                        <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color="primary.500"
                        >
                          {item.price
                            .toLocaleString('fa-IR')
                            .replace(/٬/g, '٫')}
                        </Text>
                        <PriceIcon />
                      </HStack>
                    </VStack>
                    <AddProduct width="110px" showCart={false} />
                  </HStack>
                  <Divider my={7} />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
