import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Select,
  SelectField,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import uesStore from 'store/products';
import { DropdownIcon, FilterIcon } from 'components/common/Icons';
import Products from 'components/shop/Product';
import SingleProduct from 'components/shop/SingleProduct';

export default function Main({ category }: { category: string }) {
  const store = uesStore();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <VStack
        as="main"
        h="640px"
        w="1191px"
        mx="auto"
        spacing={'1.2rem'}
        zIndex="20"
        pos="relative"
      >
        <HStack spacing={4} alignSelf="start">
          <Select
            icon={<DropdownIcon />}
            bgColor="white"
            w="max-content"
            h="2.75rem"
            fontSize={'xl'}
            css={{
              '& + .css-116fcjy': { right: 'unset', left: '.5rem' },
            }}
            onChange={e => store.sortProducts(e.target.value)}
            color="textsecondary"
          >
            <option value="lowest">ارزان‌ترین به گران‌ترین</option>
            <option value="highest">گران‌ترین به ارزان‌ترین</option>
            <option value="newest">جدیدترین به قدیمی‌ترین</option>
            <option value="original">قدیمی‌ترین به جدیدترین</option>
          </Select>
          <Button
            bg="white"
            color={'textsecondary'}
            h="2.75rem"
            fontSize={'xl'}
            fontWeight={'regular'}
            leftIcon={<FilterIcon />}
            onClick={onOpen}
          >
            فیلتر محصولات
          </Button>
        </HStack>

        <Products category={category} />
      </VStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" mb={8}>
            فیلتر کردن محصولات
          </DrawerHeader>

          <DrawerBody>
            <SelectField
              w={'90%'}
              h={'2.75rem'}
              p={2}
              name="type"
              border="1px"
              borderColor="textsecondary"
              borderRadius="6px"
              onChange={e => store.categoryProducts(e.target.value)}
            >
              <option value="all">همه محصولات</option>
              <option value="ram">رم</option>
              <option value="manitor">مانیتور</option>
              <option value="hard">هارد</option>
              <option value="case">کیس</option>
              <option value="fan">فن</option>
              <option value="motherboard">مادربورد</option>
            </SelectField>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
