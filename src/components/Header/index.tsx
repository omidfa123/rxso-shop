import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from '../Slider';
import HeaderActions from './HeaderActions';

const Header = () => {
  return (
    <>
      <Box as="header" h="12.375rem" mb="2.625rem" zIndex="999">
        <Box as="nav" bg={'white'} h="4.6875rem" px={10} py={5}>
          <Container maxWidth="1440px" h="100%" mx="auto" pos="relative">
            <Link href="/">
              <a>
                <Image
                  src="https://res.cloudinary.com/rixso/image/upload/v1661052546/rixsoShop/logos/logo_whdzt5.svg"
                  alt="رکسو شاپ"
                  height={32}
                  width={100}
                />
              </a>
            </Link>
            <HeaderActions />
            <Box
              mt="-10px"
              mx={'auto'}
              filter="url(#round)"
              _before={{
                content: '""',
                display: 'block',
                width: '100%',
                height: '146px',
                backgroundColor: 'white',
                boxShadow: ' 0px 10px 44px rgba(0, 0, 0, 0.05)',
                clipPath:
                  'polygon(0 16%, 0 0, 100% 0, 100% 16%,86% 18%, 75% 100%, 25% 100%, 14% 18%)',
                backdropFilter: 'blur(15px)',
              }}
            />
            <Slider />
            <Box
              top="80px"
              pos="absolute"
              right="0"
              filter="url(#round)"
              _before={{
                content: '""',
                display: 'block',
                width: '284px',
                height: '97px ',
                backgroundColor: '#DDDFE5',
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5))',
                mixBlendMode: 'normal',
                boxShadow: ' 0px 4px 25px rgba(0, 0, 0, 0.05)',
                clipPath: 'polygon(0 85% , 100% -142% , 100% 100% , 0% 100%)',
              }}
            />

            <Box
              top="80px"
              pos="absolute"
              left="0"
              width={'max-content'}
              transform="scaleX(-1)"
              filter="url(#round)"
              _before={{
                content: '""',
                display: 'block',
                width: '284px',
                height: '97px ',
                backgroundColor: '#DDDFE5',
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5))',

                mixBlendMode: 'normal',
                boxShadow: ' 0px 4px 25px rgba(0, 0, 0, 0.05)',
                clipPath: 'polygon(0 85% , 100% -142% , 100% 100% , 0% 100%)',
              }}
            />

            <svg
              style={{ visibility: 'hidden', position: 'absolute' }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="round">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
            <Box />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Header;
