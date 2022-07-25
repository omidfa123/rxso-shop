import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

export const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <IconButton
      pos={'absolute'}
      top="0"
      aria-label="دسته بندی بعدی"
      icon={<ArrowForwardIcon fontSize={20} color="iconcolor" />}
      bgColor="transparent"
      borderRadius="full"
      border="1px"
      borderColor="strokecolor"
      onClick={() => swiper.slidePrev()}
    />
  );
};

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <IconButton
      pos={'absolute'}
      top="0"
      left="0"
      icon={<ArrowBackIcon fontSize={18} color="iconcolor" />}
      aria-label="دسته بندی قبلی"
      bgColor="transparent"
      borderRadius="full"
      border="1px"
      borderColor="strokecolor"
      mr="auto"
      onClick={() => swiper.slideNext()}
    />
  );
};
