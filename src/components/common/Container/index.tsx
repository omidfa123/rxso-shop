import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Conteainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box maxWidth="1440px" h="100%" mx="auto">
        {children}
      </Box>
    </>
  );
};

export default Conteainer;
