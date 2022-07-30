import { Search2Icon } from '@chakra-ui/icons';
import { IconeUser } from '../../utils/Icons';
import DarkModeSwitch from '../DarkModeSwitch';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import useStore from '../../stores/products';

const HeaderActions = () => {
  const store = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <>
      <Flex pos="absolute" left="0" top="0" zIndex="banner" gap={'12px'}>
        <DarkModeSwitch />
        <IconButton
          borderRadius="full"
          w="42px"
          h="42px"
          icon={<IconeUser />}
          aria-label="ثبتنام یا ورود"
          variant="ghost"
          opacity={0.8}
          onClick={() => setIsOpen(true)}
        />
        <IconButton
          borderRadius="full"
          w="42px"
          h="42px"
          icon={<Search2Icon color="#1E385F" boxSize={4} />}
          aria-label="جستجو"
          variant="ghost"
          opacity={0.8}
          onClick={() => setIsOpen(true)}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent pt={4}>
          <ModalBody>
            <InputGroup>
              <InputRightAddon children={<Search2Icon />} />
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
