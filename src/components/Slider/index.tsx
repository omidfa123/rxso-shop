import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Center, IconButton, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState, useRef, useMemo } from 'react';
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
import { Splide, SplideSlide } from '@splidejs/react-splide';

let activeSlide: number;

import '@splidejs/react-splide/css';
const Slider = () => {
  // const store = useStore();
  // const [activeSlide, setActiveSlide] = useState(0);
  const SplideRef = useRef<Splide>(null);
  const slides = useMemo(
    () => [
      {
        text: 'مادربورد',
        activeIndex: [7, 14],
        icon: (
          <MotherboardIcon
            boxSize="60px"
            color={activeSlide === 0 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'حافظه رم',
        activeIndex: [8],
        icon: (
          <RamIcon
            boxSize="60px"
            color={activeSlide === 1 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'هارد دیسک',
        activeIndex: [9],
        icon: (
          <HardDiskIcon
            boxSize="60px"
            color={activeSlide === 2 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'فن کیس',
        activeIndex: [10],
        icon: (
          <FanIcon
            boxSize="60px"
            color={activeSlide === 3 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'حافظه SSD',
        activeIndex: [11],
        icon: (
          <SSDIcon
            boxSize="60px"
            color={activeSlide === 4 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'کیس  ',
        activeIndex: [12],
        icon: (
          <CaseIcon
            boxSize="60px"
            color={activeSlide === 5 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
      {
        text: 'مانیتور',
        activeIndex: [6, 13],
        icon: (
          <MonitorIcon
            boxSize="60px"
            color={activeSlide === 6 ? '#2F90CE' : '#A9B1C3'}
          />
        ),
      },
    ],
    [activeSlide]
  );
  // const sliderBoutton = [
  //   {
  //     icon: <ArrowForwardIcon boxSize="24px" color="#CACFDB" />,
  //     transform: 'translate(-53px , 28px)',
  //     ariaLable: 'بعدی',
  //     onclick: () => swiper!.slideNext(),
  //   },
  //   {
  //     icon: <ArrowBackIcon boxSize="24px" color="#CACFDB" />,
  //     transform: 'translate(53px , 28px)',
  //     ariaLable: 'قبلی',
  //     onclick: () => swiper!.slidePrev(),
  //   },
  // ];
  // useEffect(() => {
  //   let selectedCategory: string;
  //   switch (activeIndex) {
  //     case 0:
  //       selectedCategory = 'motherboard';
  //       break;
  //     case 1:
  //       selectedCategory = 'ram';
  //       break;
  //     case 2:
  //       selectedCategory = 'hard';
  //       break;
  //     case 3:
  //       selectedCategory = 'fan';
  //       break;
  //     case 4:
  //       selectedCategory = 'ssd';
  //       break;
  //     case 5:
  //       selectedCategory = 'case';
  //       break;
  //     case 6:
  //       selectedCategory = 'manitor';
  //       break;
  //   }
  //   store.categoryProducts(selectedCategory!);
  // }, [activeSlide]);

  return (
    // <Box
    //   zIndex={1}
    //   pos="relative"
    //   w="max-content"
    //   mx="auto"
    //   transform="translateY(-120%)"
    // >
    //   <Box
    //     width="43rem"
    //     __css={{
    //       '& .swiper-initialized': {
    //         paddingTop: '8px',
    //         height: '116px',
    //         borderRadius: '2.7rem',
    //       },
    //     }}
    //   >
    //     {sliderBoutton.map((button, index) => (
    //       <IconButton
    //         key={button.ariaLable}
    //         pos="absolute"
    //         top="0"
    //         right={index === 1 ? '0' : 'unset'}
    //         left={index === 0 ? '0' : 'unset'}
    //         transform={button.transform}
    //         aria-label={button.ariaLable}
    //         icon={button.icon}
    //         bgColor="transparent"
    //         borderRadius="full"
    //         border="1px"
    //         borderColor="strokecolor"
    //         _hover={{
    //           bgColor: 'strokecolor',
    //           borderColor: 'strokecolor',
    //           '& svg': {
    //             color: '#fff',
    //           },
    //         }}
    //         _active={{
    //           bgColor: 'strokecolor',
    //           borderColor: 'strokecolor',
    //           '& svg': {
    //             color: '#fff',
    //           },
    //         }}
    //         _focus={{
    //           outline: 'none',
    //         }}
    //         onClick={button.onclick}
    //       />
    //     ))}

    //     <Swiper
    //       direction="horizontal"
    //       centeredSlides={true}
    //       spaceBetween={22}
    //       slidesPerView={7}
    //       loop={true}
    //       onSwiper={swiper => {
    //         setSwiper(swiper);
    //       }}
    //       onSlideChange={slide => setActiveSlide(slide.activeIndex)}
    //       initialSlide={3}
    //     >
    //       {slides.map(({ text, activeIndex, icon }, index) => (
    //         <SwiperSlide key={index} onClick={() => swiper?.slideToLoop(index)}>
    //           <Center flexDir="column" gap={3} role="group">
    //             <IconButton
    //               aria-label={text}
    //               w="4.5rem"
    //               h="4.5rem"
    //               borderRadius="full"
    //               border="1px"
    //               borderColor={
    //                 activeSlide === activeIndex[0] ||
    //                 activeSlide === activeIndex[1]
    //                   ? 'activecolor'
    //                   : 'iconcolor'
    //               }
    //               bgColor={
    //                 activeSlide === activeIndex[0] ||
    //                 activeSlide === activeIndex[1]
    //                   ? 'activecolor'
    //                   : 'iconcolor'
    //               }
    //               boxShadow={
    //                 activeSlide === activeIndex[0] ||
    //                 activeSlide === activeIndex[1]
    //                   ? '0px 14px 24px rgba(24, 133, 255, 0.2)'
    //                   : 'none'
    //               }
    //               icon={icon}
    //               _hover={
    //                 activeSlide === activeIndex[0] ||
    //                 activeSlide === activeIndex[1]
    //                   ? {}
    //                   : {
    //                       bgColor: 'activecolor',
    //                       borderColor: 'activecolor',
    //                       '& svg': {
    //                         color: '#2F90CE',
    //                       },
    //                     }
    //               }
    //               _active={{
    //                 bgColor: 'rgba(24, 133, 255, 0.8)',
    //                 borderColor: 'rgba(24, 133, 255, 0.8)',
    //               }}
    //             />
    //             <Text
    //               color={
    //                 activeSlide === activeIndex[0] ||
    //                 activeSlide === activeIndex[1]
    //                   ? 'activecolor'
    //                   : 'menutcolor'
    //               }
    //               _groupHover={{
    //                 color: 'activecolor',
    //               }}
    //               fontSize={'sm'}
    //               fontWeight="medium"
    //             >
    //               {text}
    //             </Text>
    //           </Center>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </Box>
    // </Box>
    <Box
      transform="translateY(-120%)"
      mx="auto"
      w={'43rem'}
      __css={{
        '& .splide .splide__track .splide__list li.is-active .chakra-stack div':
          {
            bgColor: 'activecolor',
            borderColor: 'activecolor',
            boxShadow: '0px 14px 24px rgba(24, 133, 255, 0.2)',
            '& + p': { color: 'activecolor' },
          },
        '& .splide .splide__arrows button ': {
          bg: '#fff',
          border: '1px solid #CACFDB',
          w: '36px',
          h: '36px',
          '& svg': { fill: '#CACFDB' },
        },
        '& .splide .splide__arrows': {
          '& .splide__arrow--prev': { left: '-2.6rem', top: '40%' },
          '& .splide__arrow--next': {
            right: '-2.6rem',
            top: '40%',
          },
        },
      }}
    >
      <Splide
        options={{
          type: 'loop',
          pagination: false,
          focus: 'center',
          perPage: 7,
          perMove: 1,
          start: 3,
          arrowPath:
            'M23.3619 7.84491C22.8625 7.36928 22.0706 7.38803 21.595 7.88803C21.1187 8.38803 21.1387 9.17928 21.6381 9.65553L31.2269 18.7499H6.25C5.56 18.7499 5 19.3099 5 19.9999C5 20.6899 5.56 21.2499 6.25 21.2499H31.1869L21.6381 30.3449C21.1381 30.8212 21.1187 31.6124 21.595 32.1124C21.8406 32.3699 22.17 32.4999 22.5 32.4999C22.81 32.4999 23.12 32.3855 23.3619 32.1549L34.2675 21.7674C34.74 21.2955 35 20.668 35 19.9999C35 19.3318 34.74 18.7043 34.2456 18.2112L23.3619 7.84491Z',
        }}
        dir={'ltr'}
        ref={SplideRef}
        onActive={s => (activeSlide = s.index)}
      >
        {slides.map(slide => (
          <SplideSlide key={slide.text}>
            <VStack spacing="12px">
              <Center
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                bgColor="iconcolor"
                border="1px"
                borderColor="iconcolor"
                cursor="pointer"
              >
                {slide.icon}
              </Center>
              <Text
                cursor="pointer"
                color="iconcolor"
                fontSize={'sm'}
                fontWeight="medium"
              >
                {slide.text}
              </Text>
            </VStack>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default Slider;
