import { AddIcon, MinusIcon } from 'components/common/Icons';
import { Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { DeleteIcon } from 'components/common/Icons';
import useStore from 'store/products';

const AddProduct = ({
  width,
  showCart,
  product,
}: {
  width: string;
  showCart: boolean;
  product?: any;
}) => {
  const store = useStore();
  const selectedIndex = store.cart.findIndex(p => p._id == product?._id);
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
          icon={<AddIcon boxSize="24px" />}
          onClick={() => store.setCount(product, 'add')}
        />
        <Flex
          w="46px"
          alignItems="end"
          justifyContent="center"
          fontSize="3xl"
          fontWeight="medium"
        >
          <Text as="span" mb="2px">
            {store.cart[selectedIndex]?.__v.toLocaleString('fa-IR')}
          </Text>
        </Flex>
        <IconButton
          h="44px"
          w="46px"
          aria-label="کم کردن"
          borderRadius="none"
          bgColor="transparent"
          icon={
            +store.cart[selectedIndex]?.__v > 1 ? (
              <MinusIcon boxSize="24px" />
            ) : (
              <DeleteIcon boxSize="24px" />
            )
          }
          onClick={() => {
            store.cart[selectedIndex]?.__v === 1
              ? store.removeFromCart(product)
              : store.setCount(product, 'minus');
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
