import { Badge, Flex, Text } from '@chakra-ui/react';
import useStore from 'store/products';
import { PriceIcon } from 'components/common/Icons';
import { persianPrice } from 'utils/persianPrice';

const Price = () => {
  const store = useStore();
  return (
    <Flex direction="column" gap={2}>
      <Flex gap={2}>
        <Text
          textDecoration={'line-through'}
          color="#B6C5DC"
          fontWeight="medium"
          fontSize="xl"
          alignSelf={'flex-end'}
        >
          ۱۹٫۶۳۵٫۰۰۰
        </Text>
        <Badge
          bgColor="primary.600"
          variant="solid"
          color="#fff"
          fontWeight="bold"
          fontSize="xs"
          borderRadius={14}
          padding="0px 10px"
          display="flex"
          alignItems="end"
          justifyContent="end"
        >
          ۲۰%
        </Badge>
      </Flex>
      <Flex gap={1} alignItems="center">
        <Text color="primary.500" fontWeight="bold" fontSize="3xl">
          {persianPrice(store.singleProduct.price)}
        </Text>
        <PriceIcon />
      </Flex>
    </Flex>
  );
};

export default Price;
