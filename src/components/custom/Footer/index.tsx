import { Box } from '@chakra-ui/react';
import Container from '../../common/Container';

const Footer = () => {
  return (
    <Container>
      <Box
        as="footer"
        _before={{
          content: '""',
          display: 'block',
          bgColor: '#fff',
          width: '100%',
          height: '117px ',
          clipPath: 'polygon(53% 0, 100% 0, 100% 100%, 0 100%, 0 60%, 40% 60%)',
        }}
      >
        <div></div>
      </Box>
    </Container>
  );
};

export default Footer;
