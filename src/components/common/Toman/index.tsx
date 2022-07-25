import { Flex, Box, Text } from '@chakra-ui/react';

const Toman = () => {
  return (
    <Flex position="relative">
      <Text
        color="textsecondary"
        fontWeight="medium"
        fontSize="sm"
        opacity="0.6"
      >
        توما
      </Text>
      <Box
        as="span"
        color="#A2ADBD"
        fontWeight="medium"
        fontSize="sm"
        transform={'translate(5.4px, -8px)'}
      >
        ن
      </Box>
      <Box
        w="3px"
        h=" 4.199999999999999px"
        bgColor="#fff"
        pos="absolute"
        left="30%"
      ></Box>
    </Flex>
  );
};

export default Toman;
