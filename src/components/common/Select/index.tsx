import { useState } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IconDropdown } from '../../../utils/Icons';

//
const Select = () => {
  const [active, setActive] = useState('');
  const opt = ['ارزان‌ترین به گران‌ترین', 'گران‌ترین به ارزان‌ترین'];
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
        {!active ? opt[0] : active}
      </MenuButton>
      <MenuList px={'.5rem'} borderRadius="6px">
        {opt.map((item, index) => (
          <MenuItem
            _last={{ border: 'none' }}
            color="textsecondary"
            bg={'white'}
            key={index}
            onClick={() => setActive(item)}
            borderBottom="1px solid #e6e6e6"
            py={'0.5rem'}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Select;
