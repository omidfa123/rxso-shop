import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import DarkModeSwitch from '../src/components/custom/DarkModeSwitch';

const Home: NextPage = () => {
  return (
    <>
      <Text fontWeight={800} color="text" fontSize="9xl" textAlign="center">
        امید فاریابی
      </Text>
      <DarkModeSwitch />
    </>
  );
};

export default Home;
