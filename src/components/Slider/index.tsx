import { Box, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { useState } from 'react';
import useStore from '../../stores/products';
//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';

type SwiperProps = {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  pagination?: boolean;
  navigation?: boolean;
  scrollbar?: boolean;
  mousewheel?: boolean;

  slideTo: (index: number) => void;
};

const Slider = () => {
  const store = useStore();
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperProps>();

  const handleClick = (slide: number, category: string) => {
    swiper?.slideTo(slide);
    store.categoryProducts(category);
  };

  return (
    <Box
      zIndex={1}
      pos="relative"
      w="max-content"
      mx="auto"
      transform="translateY(-120%)"
    >
      <Box width="43rem">
        <Swiper
          direction="horizontal"
          mousewheel={true}
          modules={[Mousewheel]}
          centeredSlides={true}
          spaceBetween={22}
          slidesPerView={7}
          loop={true}
          onSwiper={(swiper: any) => {
            setSwiper(swiper);
          }}
          onSlideChange={s => {
            const indexCurrentSlide = s.activeIndex;
            setActiveSlide(indexCurrentSlide);
          }}
          initialSlide={3}
        >
          <SwiperButtonNext />
          <SwiperButtonPrev />

          <SwiperSlide
            onClick={() => {
              handleClick(7, 'motherboard');
            }}
          >
            <>
              <Center flexDir="column" gap={3}>
                <IconButton
                  transition="none"
                  aria-label={'خرید مانیتور'}
                  w="4.5rem"
                  h="4.5rem"
                  borderRadius="full"
                  border="1px"
                  borderColor={
                    activeSlide === 7 || activeSlide === 14
                      ? 'activecolor'
                      : 'iconcolor'
                  }
                  bgColor={
                    activeSlide === 7 || activeSlide === 14
                      ? 'activecolor'
                      : 'transparent'
                  }
                  boxShadow={
                    activeSlide === 7 || activeSlide === 14
                      ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                      : 'none'
                  }
                  icon={
                    <Image
                      src="/assets/img/motherbord_active.png"
                      height={50}
                      width={48}
                    />
                  }
                />
                <Text
                  color={
                    activeSlide === 7 || activeSlide === 14
                      ? 'activecolor'
                      : 'menutcolor'
                  }
                  fontSize={'sm'}
                  fontWeight="medium"
                >
                  مادر بورد
                </Text>
              </Center>
            </>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              handleClick(8, 'ram');
            }}
          >
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={activeSlide === 8 ? 'activecolor' : 'iconcolor'}
                bgColor={activeSlide === 8 ? 'activecolor' : 'transparent'}
                boxShadow={
                  activeSlide === 8
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
                icon={
                  <Image
                    src="/assets/img/ram_active.png"
                    height={56}
                    width={48}
                  />
                }
              />
              <Text
                color={activeSlide === 8 ? 'activecolor' : 'menutcolor'}
                fontSize={'sm'}
                fontWeight="medium"
              >
                حافظه رم
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleClick(9, 'hard')}>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={activeSlide === 9 ? 'activecolor' : 'iconcolor'}
                bgColor={activeSlide === 9 ? 'activecolor' : 'transparent'}
                boxShadow={
                  activeSlide === 9
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
                icon={
                  <Image
                    src="/assets/img/hard_active.png"
                    height={56}
                    width={48}
                  />
                }
              />
              <Text
                color={activeSlide === 9 ? 'activecolor' : 'menutcolor'}
                fontSize={'sm'}
                fontWeight="medium"
              >
                هارد دیسک
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              handleClick(10, 'fan');
            }}
          >
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={activeSlide === 10 ? 'activecolor' : 'iconcolor'}
                bgColor={activeSlide === 10 ? 'activecolor' : 'transparent'}
                icon={
                  <Image src="/assets/img/img.png" height={96} width={96} />
                }
                boxShadow={
                  activeSlide === 10
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
              />
              <Text
                color={activeSlide === 10 ? 'activecolor' : 'menutcolor'}
                fontSize={'sm'}
                fontWeight="medium"
              >
                فن کیس
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleClick(11, 'ssd')}>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={activeSlide === 11 ? 'activecolor' : 'iconcolor'}
                bgColor={activeSlide === 11 ? 'activecolor' : 'iconcolor'}
                boxShadow={
                  activeSlide === 11
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
                icon={
                  <Image src="/assets/img/ssd.svg" height={56} width={48} />
                }
              />
              <Text
                color={activeSlide === 11 ? 'activecolor' : 'menutcolor'}
                fontSize={'sm'}
                fontWeight="medium"
              >
                حافظه SSD
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleClick(12, 'case')}>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={activeSlide === 12 ? 'activecolor' : 'iconcolor'}
                bgColor={activeSlide === 12 ? 'activecolor' : 'iconcolor'}
                boxShadow={
                  activeSlide === 12
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
                icon={
                  <Image src="/assets/img/wrong.svg" height={56} width={48} />
                }
              />
              <Text
                color={activeSlide === 12 ? 'activecolor' : 'menutcolor'}
                fontSize={'sm'}
                fontWeight="medium"
              >
                کیس
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleClick(6, 'manitor')}>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor={
                  activeSlide === 6 || activeSlide === 13
                    ? 'activecolor'
                    : 'iconcolor'
                }
                bgColor={
                  activeSlide === 6 || activeSlide === 13
                    ? 'activecolor'
                    : 'iconcolor'
                }
                boxShadow={
                  activeSlide === 6 || activeSlide === 13
                    ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                    : 'none'
                }
                icon={<Image src="/assets/img/tv.svg" height={56} width={48} />}
              />
              <Text
                color={
                  activeSlide === 6 || activeSlide === 13
                    ? 'activecolor'
                    : 'menutcolor'
                }
                fontSize={'sm'}
                fontWeight="medium"
              >
                مانیتور
              </Text>
            </Center>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Slider;
