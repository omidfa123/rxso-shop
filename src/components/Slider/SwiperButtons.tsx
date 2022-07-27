import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

export const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <IconButton
      pos={'fixed'}
      top="0"
      transform={'translate(53px , 20px)'}
      aria-label="دسته بندی بعدی"
      icon={<ArrowForwardIcon fontSize={20} color="iconcolor" />}
      bgColor="transparent"
      borderRadius="full"
      border="1px"
      borderColor="strokecolor"
      _hover={{
        bgColor: 'strokecolor',
        borderColor: 'strokecolor',
      }}
      _active={{
        bgColor: 'strokecolor',
        borderColor: 'strokecolor',
      }}
      _focus={{
        outline: 'none',
      }}
      onClick={() => swiper.slideNext()}
    />
  );
};

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <IconButton
      pos={'fixed'}
      top="0"
      left="0"
      transform={'translate(-53px , 20px)'}
      icon={<ArrowBackIcon fontSize={18} color="iconcolor" />}
      aria-label="دسته بندی قبلی"
      bgColor="transparent"
      borderRadius="full"
      border="1px"
      borderColor="strokecolor"
      mr="auto"
      _hover={{
        bgColor: 'strokecolor',
        borderColor: 'strokecolor',
      }}
      _active={{
        bgColor: 'strokecolor',
        borderColor: 'strokecolor',
      }}
      _focus={{
        outline: 'none',
      }}
      onClick={() => swiper.slidePrev()}
    />
  );
};
