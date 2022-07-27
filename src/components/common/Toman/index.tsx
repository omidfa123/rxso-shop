import { Flex, Box, Text } from '@chakra-ui/react';

const Toman = ({ bgColor }: { bgColor: string }) => {
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
        color="#78879F"
        fontWeight="medium"
        fontSize="sm"
        transform={'translate(5.4px, -7px)'}
      >
        ن
      </Box>
      <Box
        w="3px"
        h=" 4.199999999999999px"
        bgColor={bgColor}
        pos="absolute"
        left="30%"
      />
    </Flex>
  );
};

export default Toman;
