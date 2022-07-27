import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { IconDelete } from '../../utils/Icons';

const AddProduct = () => {
  return (
    <Flex gap={'12px'}>
      <Flex
        h="44px"
        borderRadius={6}
        border="1px solid #D9DCF3"
        color="#ED1F1F"
      >
        <IconButton
          w="46px"
          h="44px"
          aria-label="اضافه کردن"
          borderRadius="none"
          bgColor="transparent"
          icon={<AddIcon boxSize="15px" />}
        />
        <Flex
          w="46px"
          alignItems="end"
          justifyContent="center"
          fontSize="3xl"
          fontWeight="medium"
        >
          <Text as="span" mb="2px">
            ۱
          </Text>
        </Flex>
        <IconButton
          h="44px"
          w="46px"
          aria-label="کم کردن"
          borderRadius="none"
          bgColor="transparent"
          icon={<IconDelete boxSize="18px" />}
        />
      </Flex>
      <Flex flexDir="column">
        <Text fontSize="xl" fontWeight="medium" color="textsecondary">
          در لیست شما
        </Text>
        <Flex gap={1}>
          <Text fontSize="xs" fontWeight="medium" color="textsecondary">
            مشاهده
          </Text>
          <Button
            variant="link"
            color="primary.500"
            fontWeight="bold"
            fontSize="sm"
            _hover={{ color: 'primary.600', textDecoration: 'none' }}
            _active={{ color: 'primary.700' }}
          >
            لیست خرید
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AddProduct;
