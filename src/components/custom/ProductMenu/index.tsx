import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Center, IconButton } from '@chakra-ui/react';

import MenuIcon from '../../common/MenuIcon';

const ProductMenu = () => {
  return (
    <Box
      zIndex={1}
      pos="relative"
      w="max-content"
      mx="auto"
      transform="translateY(-100%)"
    >
      <Center h="6.25rem" w="51rem" gap={5} pb={5}>
        <IconButton
          aria-label="دسته بندی بعدی"
          icon={<ArrowForwardIcon fontSize={20} color="iconcolor" />}
          bgColor="transparent"
          borderRadius="full"
          border="1px"
          borderColor="strokecolor"
        />
        <MenuIcon />
        <IconButton
          icon={<ArrowBackIcon fontSize={18} color="iconcolor" />}
          aria-label="دسته بندی قبلی"
          bgColor="transparent"
          borderRadius="full"
          border="1px"
          borderColor="strokecolor"
        />
      </Center>
    </Box>
  );
};

export default ProductMenu;
