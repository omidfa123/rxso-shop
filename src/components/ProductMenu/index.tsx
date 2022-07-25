import { Box, Center } from '@chakra-ui/react';
import Slider from '../Slider';

const ProductMenu = () => {
  return (
    <Box
      zIndex={1}
      pos="relative"
      w="max-content"
      mx="auto"
      transform="translateY(-100%)"
    >
      <Slider />
    </Box>
  );
};

export default ProductMenu;
