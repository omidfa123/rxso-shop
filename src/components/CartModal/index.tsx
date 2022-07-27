import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
} from '@chakra-ui/react';

const CartModal = () => {
  return (
    <Modal isOpen={false} onClose={() => {}} useInert={false}>
      <ModalOverlay bg="rgba(30, 56, 95, 0.3)" backdropFilter="blur(34px)" />
      <ModalContent>
        <ModalHeader>سبد خرید</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>omidfaadvvvvvvvvvvvvvvvvvvvvvvvvvvv</Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="primary">تایید</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
