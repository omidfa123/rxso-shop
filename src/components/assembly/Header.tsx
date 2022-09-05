import {
  Box,
  Container,
  HStack,
  IconButton,
  Img,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, PinIcon } from 'components/common/Icons';
import Link from 'next/link';
import MenuDrawer from './MenuDrawer';

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        bgColor="#ffffff30"
        h={['4.75rem', '5.75rem', '6.75rem']}
      >
        <Container maxW="1440px" h="full">
          <HStack
            maxW="1045px"
            h="full"
            mx="auto"
            justify="space-between"
            px={5}
          >
            <Link href="/">
              <Img
                src="https://res.cloudinary.com/rixso/image/upload/v1661052546/rixsoShop/logos/logo_whdzt5.svg"
                alt="رکسو شاپ"
                w={['110px', '120px', '130px']}
                cursor="pointer"
              />
            </Link>
            <IconButton
              display={['block', 'block', 'none']}
              icon={<HamburgerIcon boxSize={9} />}
              aria-label="menu"
              onClick={onOpen}
            />
            <List
              display={['none', 'none', 'flex']}
              gap="55px"
              color="textsecondary"
              fontSize="2xl"
              transition="all 2s ease"
              css={{
                '& li': {
                  cursor: 'pointer',
                  userSelect: 'none',
                },
                '& li:hover': {
                  color: '#FC1B50',
                },
                '& li:active': { color: '#1E385F' },
              }}
            >
              <ListItem>صفحه اول</ListItem>
              <ListItem>تماس با ما</ListItem>
              <ListItem>درباره‌ما</ListItem>
              <ListItem>دست دوم</ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                fontWeight="semibold"
                color="#FC1B50"
                _hover={{ color: '#1E385F !important' }}
                _active={{ color: ' #FC1B50 !important' }}
              >
                <ListIcon as={PinIcon} />
                محصولات ویژه
              </ListItem>
            </List>
          </HStack>
        </Container>
      </Box>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
}
