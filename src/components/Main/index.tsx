import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  SelectField,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IconFilter } from '../../utils/Icons';
import Select from '../common/Select';
import Products from '../Products';
import SingleProduct from '../SingleProduct';
import uesStore from '../../stores/products';

const Main = () => {
  const store = uesStore();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box
        as="main"
        h="640px"
        w="1191px"
        mx="auto"
        display="flex"
        flexDir={'column'}
        gap={'1.2rem'}
        zIndex="banner"
        pos="relative"
      >
        <Flex gap={2}>
          <Select />
          <Button
            bg="white"
            color={'textsecondary'}
            w="10.375rem"
            h={'2.75rem'}
            fontSize={'xl'}
            fontWeight={'regular'}
            lineHeight={5}
            letterSpacing={'0.02rem'}
            borderRadius="6px"
            leftIcon={<IconFilter />}
            onClick={() => setIsOpen(true)}
          >
            فیلتر محصولات
          </Button>
        </Flex>
        <Flex h="100%" w="100%" gap={6}>
          <Box w="calc(100% - 334px)" h="100%">
            <Products />
          </Box>
          <Box w="334px" h="100%">
            <SingleProduct />
          </Box>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
      >
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
};

export default Main;
