import { Badge, Flex, Text } from '@chakra-ui/react';
import Toman from '../common/Toman';

const Price = () => {
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
          ۱۸٫۵۸۰٫۰۰۰
        </Text>
        <Toman bgColor="#F2F6FB" />
      </Flex>
    </Flex>
  );
};

export default Price;
