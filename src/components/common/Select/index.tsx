import { useState } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IconDropdown } from '../../../utils/Icons';
import useStore from '../../../stores/products';
//
const Select = () => {
  const store = useStore();
  const [selected, setSlected] = useState('');
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IconDropdown />}
        bg="white"
        color={'textsecondary'}
        w="10.375rem"
        h={'2.75rem'}
        fontSize={'xl'}
        fontWeight={'regular'}
        lineHeight={5}
        letterSpacing={'0.02rem'}
        borderRadius="6px"
      >
        {selected || 'همه محصولات'}
      </MenuButton>
      <MenuList px={'.5rem'} borderRadius="6px">
        <MenuItem
          _last={{ border: 'none' }}
          color="textsecondary"
          bg={'white'}
          onClick={() => {
            setSlected('همه محصولات');
            store.sortProducts('original');
          }}
          borderBottom="1px solid #e6e6e6"
          py={'0.5rem'}
        >
          همه محصولات
        </MenuItem>
        <MenuItem
          _last={{ border: 'none' }}
          color="textsecondary"
          bg={'white'}
          onClick={() => {
            setSlected('ارزان‌ترین به گران‌ترین');
            store.sortProducts('lowest');
          }}
          borderBottom="1px solid #e6e6e6"
          py={'0.5rem'}
        >
          ارزان‌ترین به گران‌ترین
        </MenuItem>
        <MenuItem
          _last={{ border: 'none' }}
          color="textsecondary"
          bg={'white'}
          onClick={() => {
            setSlected('گران‌ترین به ارزان‌ترین');
            store.sortProducts('highest');
          }}
          borderBottom="1px solid #e6e6e6"
          py={'0.5rem'}
        >
          گران‌ترین به ارزان‌ترین
        </MenuItem>
        <MenuItem
          _last={{ border: 'none' }}
          color="textsecondary"
          bg={'white'}
          onClick={() => {
            setSlected('جدیدترین');
            store.sortProducts('newest');
          }}
          borderBottom="1px solid #e6e6e6"
          py={'0.5rem'}
        >
          جدیدترین
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Select;
