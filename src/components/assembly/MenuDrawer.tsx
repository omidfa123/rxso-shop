import {
  Button,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Img,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { PinIcon } from 'components/common/Icons';

export default function MenuDrawer({
  isOpen,
  onClose,
}: {
  isOpen: any;
  onClose: any;
}) {
  return (
    <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <CloseButton pt={6} pr={4} onClick={onClose} />
        <DrawerHeader>
          <Img
            src="https://res.cloudinary.com/rixso/image/upload/v1660976602/rixsoShop/logos/logoSecondary_vyncm5.png"
            w="100%"
            alt="رکسوشاپ"
          />
          <Divider mt={6} />
        </DrawerHeader>
        <DrawerBody>
          <List
            color="textsecondary"
            fontSize="2xl"
            textAlign="center"
            transition="all .6 ease"
            spacing={7}
            css={{
              '& li': {
                cursor: 'pointer',
                userSelect: 'none',
                padding: '10px 0 10px 0',
              },
              '& li:hover': { color: '#fff', backgroundColor: '#FC1B50' },
              '& li:active': { color: '#fff', backgroundColor: '#Ff2B50' },
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
              textAlign="center"
              justifyContent="center"
              color="#FC1B50"
              _hover={{
                color: '#fff !important',
                bgColor: '#1E385F !important ',
              }}
              _active={{ color: ' #FC1B50 !important' }}
            >
              <ListIcon as={PinIcon} />
              محصولات ویژه
            </ListItem>
          </List>
        </DrawerBody>
        <DrawerFooter>
          <Button
            w="full"
            bgColor="#FC1B50"
            _hover={{ bgColor: '#cC1B50' }}
            _active={{ bgColor: '#aC1B50' }}
            color="white"
            mb={4}
            onClick={onClose}
          >
            بستن
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
