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
} from '@chakra-ui/react';
import { useState } from 'react';

const HeaderActions = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button mr={4}>ورود</Button>
            <Button>ثبت‌نام</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HeaderActions;
