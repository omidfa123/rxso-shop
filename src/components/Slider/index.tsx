import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Center, IconButton, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useStore from 'stores/products';
import 'swiper/css';

import { Swiper as SwiperType } from 'swiper/types';
import { ArrowBackIcon, ArrowForwardIcon } from 'components/common/Icons';
import {
  CaseIcon,
  FanIcon,
  HardDiskIcon,
  MonitorIcon,
  MotherboardIcon,
  RamIcon,
  SSDIcon,
} from 'components/common/Icons/SpacialIcons';

const Slider = () => {
  const store = useStore();
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  const slides = [
    {
      text: 'مادربورد',
      activeIndex: [7, 14],
      icon: (
        <MotherboardIcon
          boxSize="60px"
          color={swiper?.realIndex === 0 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'حافظه رم',
      activeIndex: [8],
      icon: (
        <RamIcon
          boxSize="60px"
          color={swiper?.realIndex === 1 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'هارد دیسک',
      activeIndex: [9],
      icon: (
        <HardDiskIcon
          boxSize="60px"
          color={swiper?.realIndex === 2 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'فن کیس',
      activeIndex: [10],
      icon: (
        <FanIcon
          boxSize="60px"
          color={swiper?.realIndex === 3 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'حافظه SSD',
      activeIndex: [11],
      icon: (
        <SSDIcon
          boxSize="60px"
          color={swiper?.realIndex === 4 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'کیس  ',
      activeIndex: [12],
      icon: (
        <CaseIcon
          boxSize="60px"
          color={swiper?.realIndex === 5 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
    {
      text: 'مانیتور',
      activeIndex: [6, 13],
      icon: (
        <MonitorIcon
          boxSize="60px"
          color={swiper?.realIndex === 6 ? '#2F90CE' : '#A9B1C3'}
        />
      ),
    },
  ];
  const sliderBoutton = [
    {
      icon: <ArrowForwardIcon boxSize="24px" color="#CACFDB" />,
      transform: 'translate(-53px , 28px)',
      ariaLable: 'بعدی',
      onclick: () => swiper!.slideNext(),
    },
    {
      icon: <ArrowBackIcon boxSize="24px" color="#CACFDB" />,
      transform: 'translate(53px , 28px)',
      ariaLable: 'قبلی',
      onclick: () => swiper!.slidePrev(),
    },
  ];
  useEffect(() => {
    let selecteCategory: string;
    switch (swiper?.realIndex) {
      case 0:
        selecteCategory = 'motherboard';
        break;
      case 1:
        selecteCategory = 'ram';
        break;
      case 2:
        selecteCategory = 'hard';
        break;
      case 3:
        selecteCategory = 'fan';
        break;
      case 4:
        selecteCategory = 'ssd';
        break;
      case 5:
        selecteCategory = 'case';
        break;
      case 6:
        selecteCategory = 'manitor';
        break;
    }
    store.categoryProducts(selecteCategory!);
  }, [activeSlide]);

  return (
    <Box
      zIndex={1}
      pos="relative"
      w="max-content"
      mx="auto"
      transform="translateY(-120%)"
    >
      <Box
        width="43rem"
        __css={{
          '& .swiper-initialized': {
            paddingTop: '8px',
            height: '116px',
            borderRadius: '2.7rem',
          },
        }}
      >
        {sliderBoutton.map((button, index) => (
          <IconButton
            key={button.ariaLable}
            pos="absolute"
            top="0"
            right={index === 1 ? '0' : 'unset'}
            left={index === 0 ? '0' : 'unset'}
            transform={button.transform}
            aria-label={button.ariaLable}
            icon={button.icon}
            bgColor="transparent"
            borderRadius="full"
            border="1px"
            borderColor="strokecolor"
            _hover={{
              bgColor: 'strokecolor',
              borderColor: 'strokecolor',
              '& svg': {
                color: '#fff',
              },
            }}
            _active={{
              bgColor: 'strokecolor',
              borderColor: 'strokecolor',
              '& svg': {
                color: '#fff',
              },
            }}
            _focus={{
              outline: 'none',
            }}
            onClick={button.onclick}
          />
        ))}

        <Swiper
          direction="horizontal"
          centeredSlides={true}
          spaceBetween={22}
          slidesPerView={7}
          loop={true}
          onSwiper={swiper => {
            setSwiper(swiper);
          }}
          onSlideChange={slide => setActiveSlide(slide.activeIndex)}
          initialSlide={3}
        >
          {slides.map(({ text, activeIndex, icon }, index) => (
            <SwiperSlide key={index} onClick={() => swiper?.slideToLoop(index)}>
              <Center flexDir="column" gap={3} role="group">
                <IconButton
                  aria-label={text}
                  w="4.5rem"
                  h="4.5rem"
                  borderRadius="full"
                  border="1px"
                  borderColor={
                    activeSlide === activeIndex[0] ||
                    activeSlide === activeIndex[1]
                      ? 'activecolor'
                      : 'iconcolor'
                  }
                  bgColor={
                    activeSlide === activeIndex[0] ||
                    activeSlide === activeIndex[1]
                      ? 'activecolor'
                      : 'iconcolor'
                  }
                  boxShadow={
                    activeSlide === activeIndex[0] ||
                    activeSlide === activeIndex[1]
                      ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
                      : 'none'
                  }
                  icon={icon}
                  _hover={
                    activeSlide === activeIndex[0] ||
                    activeSlide === activeIndex[1]
                      ? {}
                      : {
                          bgColor: 'activecolor',
                          borderColor: 'activecolor',
                          '& svg': {
                            color: '#2F90CE',
                          },
                        }
                  }
                  _active={{
                    bgColor: 'rgba(24, 133, 255, 0.8)',
                    borderColor: 'rgba(24, 133, 255, 0.8)',
                  }}
                />
                <Text
                  color={
                    activeSlide === activeIndex[0] ||
                    activeSlide === activeIndex[1]
                      ? 'activecolor'
                      : 'menutcolor'
                  }
                  _groupHover={{
                    color: 'activecolor',
                  }}
                  fontSize={'sm'}
                  fontWeight="medium"
                >
                  {text}
                </Text>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Slider;
