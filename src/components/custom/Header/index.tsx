import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Container from '../../common/Container';

const Header = () => {
  return (
    <>
      <Box as="header" h="12.375rem">
        <Box
          bgImage="linear-gradient(rgba(255, 255, 255, .9)
      , rgba(255, 255, 255, .9))"
          h="4.6875rem"
          px={10}
          py={5}
        >
          <Container>
            <Image src="/img/logo.png" alt="رکسو شاپ" height={30} width={102} />
            <Box
              width="85%"
              mt="16px"
              height="calc( 12.375rem - 4.6875rem)"
              bgImage="linear-gradient(rgba(255, 255, 255, .9)
      , rgba(255, 255, 255, .9))"
              mx={'auto'}
            >
              omid
            </Box>
            <Box />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Header;
