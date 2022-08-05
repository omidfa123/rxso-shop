import { Search2Icon } from '@chakra-ui/icons';
import { IconeUser } from '../../utils/Icons';
import DarkModeSwitch from '../DarkModeSwitch';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  IconButton,
  InputGroup,
  InputRightAddon,
  Input,
  Tooltip,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import useStore from '../../stores/products';
import { useRouter } from 'next/router';
const HeaderActions = () => {
  const router = useRouter();
  const store = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <>
      <Box pos="absolute" left="0" top="0">
        <DarkModeSwitch />
        <Tooltip label="ناحیه کاربری" offset={[0, 13]}>
          <IconButton
            isRound
            w="42px"
            h="42px"
            icon={<IconeUser />}
            aria-label="ثبتنام یا ورود"
            variant="ghost"
            opacity={0.8}
            onClick={() => router.push('/login')}
            mx="3"
          />
        </Tooltip>
        <Tooltip label="جستجو" offset={[0, 13]}>
          <IconButton
            isRound
            w="42px"
            h="42px"
            icon={<Search2Icon color="#1E385F" boxSize={4} />}
            aria-label="جستجو"
            variant="ghost"
            opacity={0.8}
            onClick={() => setIsOpen(true)}
          />
        </Tooltip>
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent pt={4}>
          <ModalBody>
            <InputGroup>
              <InputRightAddon>
                <Search2Icon />
              </InputRightAddon>
              <Input
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  store.searchProducts(e.target.value);
                }}
                placeholder="دنبال چه محصولی میگردی؟"
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>بستن</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HeaderActions;
