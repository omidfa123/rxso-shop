import { Box } from '@chakra-ui/react';
import Container from '../../common/Container';

const Footer = () => {
  return (
    <Container>
      <Box
        as="footer"
        mx="auto"
        filter="url(#round)"
        _before={{
          content: '""',
          display: 'block',
          bgColor: '#fff',
          width: '100%',
          height: '117px ',
          mx: 'auto',
          clipPath: 'polygon(53% 0, 100% 0, 100% 100%, 0 100%, 0 60%, 40% 60%)',
        }}
      ></Box>
    </Container>
  );
};

export default Footer;
