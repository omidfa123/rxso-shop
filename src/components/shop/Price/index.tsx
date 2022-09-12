import { Badge, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import useStore from 'store/products';
import { PriceIcon } from 'components/common/Icons';
import { persianPrice } from 'utils/persianPrice';

const Price = ({ price }: { price: number }) => {
  const store = useStore();
  return (
    <VStack>
      <HStack>
        <Text
          textDecoration={'line-through'}
          color="#B6C5DC"
          fontWeight="medium"
          fontSize="xl"
          alignSelf={'flex-end'}
        >
          ۱۹٫۶۳۵٫۰۰۰
        </Text>
        <Box
          as="span"
          bgColor="primary.600"
          p="3px 9px"
          rounded="14px"
          fontSize="11px"
          fontWeight="bold"
          color="white"
        >
          ۲۰%
        </Box>
      </HStack>
      <HStack>
        <Text color="primary.500" fontWeight="bold" fontSize="3xl">
          {persianPrice(price)}
        </Text>
        <PriceIcon />
      </HStack>
    </VStack>
  );
};

export default Price;
