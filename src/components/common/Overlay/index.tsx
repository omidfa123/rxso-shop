import { Box } from '@chakra-ui/react';
import useStore from 'stores/products';
const Overlay = () => {
  const store = useStore();
  return (
    <Box
      w="100%"
      h="100%"
      bgColor="rgba(250, 250, 250, 0.3)"
      backdropFilter={'blur(14px)'}
      pos="absolute"
      zIndex={99}
      display={store.isCartOpen ? 'block' : 'none'}
      onClick={() => store.setIsCartOpen(false)}
      transition="all .3s ease-in-out"
    />
  );
};

export default Overlay;
