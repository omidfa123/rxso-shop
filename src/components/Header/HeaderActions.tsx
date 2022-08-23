import { SearchIcon, UserIcon } from 'components/common/Icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  IconButton,
  InputGroup,
  InputRightAddon,
  Input,
  Tooltip,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from 'components/common/Icons';
import useStore from '../../stores/products';
import { useRouter } from 'next/router';
const HeaderActions = () => {
  const router = useRouter();
  const store = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();

  const actionData = [
    {
      label: ['حالت روشن', 'حالت شب'],
      icon: [<MoonIcon boxSize="34px" />, <SunIcon boxSize="34px" />],
      onClick: () => toggleColorMode(),
    },
    {
      label: ['جستجو'],
      icon: [<SearchIcon boxSize="34px" />],
      onClick: () => onOpen(),
    },
    {
      label: ['ناحیه کاربری'],
      icon: [<UserIcon boxSize="34px" />],
      onClick: () => router.push('/login'),
    },
  ];

  return (
    <>
      <Box pos="absolute" left="0" top="0" zIndex="banner">
        {actionData.map((action, index) => (
          <Tooltip
            key={action.label[0]}
            label={colorMode === 'dark' ? action.label[0] : action.label[1]}
          >
            <IconButton
              aria-label={action.label[0]}
              icon={
                index === 0
                  ? colorMode === 'dark'
                    ? action.icon[0]
                    : action.icon[1]
                  : action.icon[0]
              }
              w="42px"
              h="42px"
              isRound
              onClick={action.onClick}
              color="#1E385F"
              variant="ghost"
              opacity={0.8}
            />
          </Tooltip>
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt={4}>
          <ModalBody>
            <InputGroup>
              <InputRightAddon>
                <SearchIcon boxSize="34px" />
              </InputRightAddon>
              <Input
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  store.searchProducts(e.target.value);
                }}
                placeholder="دنبال چه محصولی هستید؟"
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>بستن</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HeaderActions;
