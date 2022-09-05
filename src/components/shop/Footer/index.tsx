import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  SlideFade,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/future/image';
import AddProduct from '../SingleProduct/AddProduct';
import useStore from 'store/products';
import {
  MinusCircleIcon,
  AddCircleIcon,
  PriceIcon,
} from 'components/common/Icons';
import { CartEmptyIcon } from 'components/common/Icons/SpacialIcons';
import { persianPrice } from 'utils/persianPrice';
const Footer = () => {
  const store = useStore();
  const { isOpen, onOpen } = useDisclosure();
  return (
    <>
      <Container
        as="footer"
        maxWidth="1440px"
        h="117px"
        mx="auto"
        mt={'24px'}
        pos="relative"
        p="0"
        zIndex={'banner'}
        _before={{
          content: '""',
          display: 'block',
          bgColor: '#fff',
          width: '24px',
          height: '116px ',
          pos: 'absolute',
          right: '0',
          bottom: '0',
        }}
        _after={{
          content: '""',
          display: 'block',
          bgColor: '#fff',
          width: '24px',
          height: '44px ',
          pos: 'absolute',
          left: '0',
          bottom: '0',
        }}
      >
        <Box
          filter={'url(#round)'}
          pos="relative"
          zIndex={store.isCartOpen ? 'banner' : 'unset'}
          _before={{
            content: '""',
            display: 'block',
            bgColor: '#fff',
            width: '100%',
            height: '117px ',
            boxShadow: ' 0px -4px 50px rgba(0, 0, 0, 0.06)',
            mx: 'auto',
            clipPath:
              'polygon(53% 0, 100% 0, 100% 100%, 0 100%, 0 62%, 47% 65%);',
          }}
        >
          <HStack width="546px" pos="absolute" top="24px" right={'8.4%'}>
            <VStack flexGrow="1" alignItems={'start'} spacing="0">
              <Text
                color="textsecondary"
                fontWeight="medium"
                fontSize="sm"
                opacity="0.6"
              >
                مبلغ قابل پرداخت
              </Text>
              <HStack>
                <Text color="primary.500" fontWeight="bold" fontSize="5xl">
                  {persianPrice(
                    store.cart.reduce(
                      (acc, item) => acc + item.price * item.__v,
                      0
                    )
                  )}
                </Text>
                <PriceIcon />
              </HStack>
            </VStack>
            <HStack spacing={10}>
              <HStack
                fontSize="xl"
                fontWeight="semibold"
                cursor="pointer"
                color="#1E385F"
                pos="relative"
                _hover={{
                  color: 'primary.500',
                }}
                onClick={() =>
                  store.isCartOpen
                    ? store.setIsCartOpen(false)
                    : (store.setIsCartOpen(true) as any) & (onOpen() as any)
                }
              >
                {store.isCartOpen ? (
                  <MinusCircleIcon boxSize={'26px'} />
                ) : (
                  <AddCircleIcon boxSize={'24px'} />
                )}
                <Text>
                  {store.isCartOpen ? ' بستن لیست خرید' : 'مشاهد لیست خرید'}
                </Text>
                {store.cart.length && (
                  <Badge
                    bgColor="secondary.700"
                    variant="solid"
                    w={'23px'}
                    h={'23px'}
                    rounded="full"
                    display="flex"
                    alignItems="end"
                    justifyContent="center"
                    fontSize="sm"
                    pos="absolute"
                    top="-50%"
                    right="-14%"
                    ring={'2px'}
                    ringColor="#fff"
                  >
                    {store.cart.length.toLocaleString('fa-IR')}
                  </Badge>
                )}
              </HStack>
              <Button
                w={'10.125rem'}
                h={'2.75rem'}
                fontSize="xl"
                color="white"
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
            </HStack>
          </HStack>
          <SlideFade in={isOpen}>
            <Box
              position="absolute"
              bottom="0"
              right="5.5%"
              zIndex="-1"
              w="614px"
              h="640px"
              bgColor="white"
              pt={8}
              pr={8}
              pb={28}
              overflowY="auto"
              display={store.isCartOpen ? 'block' : 'none'}
              css={{
                '&::-webkit-scrollbar': {
                  width: '8px',
                  background: '#B6C5DC',
                  borderRadius: '7px',
                  opacity: '0.5',
                  height: '10px',
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
                  marginBottom: '68px',
                },
              }}
            >
              {store.cart.length == 0 && (
                <>
                  <Text
                    pos="absolute"
                    bottom="40%"
                    fontWeight="bold"
                    color="textsecondary"
                    fontSize="lg"
                  >
                    لیست خرید شما خالی است
                  </Text>
                  <CartEmptyIcon boxSize={'100%'} />
                </>
              )}
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
                    <AddProduct width="110px" showCart={false} product={item} />
                  </HStack>
                  <Divider my={4} />
                </div>
              ))}
            </Box>
          </SlideFade>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
