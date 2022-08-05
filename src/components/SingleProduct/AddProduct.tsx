import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IconDelete } from '../../utils/Icons';
import useStore from 'src/stores/products';

const AddProduct = ({
  width,
  showCart,
}: {
  width: string;
  showCart: boolean;
}) => {
  const store = useStore();
  return (
    <HStack spacing={4} marginRight="auto !important">
      <Flex
        h="44px"
        w={width}
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
          onClick={() => store.setCount(store.count + 1)}
        />
        <Flex
          w="46px"
          alignItems="end"
          justifyContent="center"
          fontSize="3xl"
          fontWeight="medium"
        >
          <Text as="span" mb="2px">
            {store.count.toLocaleString('fa-IR')}
          </Text>
        </Flex>
        <IconButton
          h="44px"
          w="46px"
          aria-label="کم کردن"
          borderRadius="none"
          bgColor="transparent"
          icon={store.count > 1 ? <MinusIcon /> : <IconDelete boxSize="15px" />}
          onClick={() => {
            store.count === 1
              ? store.removeFromCart(store.singleProduct)
              : store.setCount(store.count - 1);
          }}
        />
      </Flex>
      {showCart && (
        <Flex gap={'12px'} ml="auto">
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
      )}
    </HStack>
  );
};
export default AddProduct;
