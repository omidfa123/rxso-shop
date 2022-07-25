import { Box, Button, Flex } from '@chakra-ui/react';
import { IconFilter } from '../../utils/Icons';
import Select from '../common/Select';
import Products from '../Products';
import SingleProduct from '../SingleProduct';

const Main = () => {
  return (
    <Box
      as="main"
      h="640px"
      w="1191px"
      mx="auto"
      display="flex"
      flexDir={'column'}
      gap={'1.2rem'}
      zIndex="banner"
      pos="relative"
    >
      <Flex gap={2}>
        <Select />
        <Button
          bg="white"
          color={'textsecondary'}
          w="10.375rem"
          h={'2.75rem'}
          fontSize={'xl'}
          fontWeight={'regular'}
          lineHeight={5}
          letterSpacing={'0.02rem'}
          borderRadius="6px"
          leftIcon={<IconFilter />}
        >
          فیلتر محصولات
        </Button>
      </Flex>
      <Flex h="100%" w="100%" gap={6}>
        <Box w="calc(100% - 334px)" h="100%">
          <Products />
        </Box>
        <Box w="334px" h="100%">
          <SingleProduct />
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;
