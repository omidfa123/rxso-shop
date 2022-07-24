import { Box, Center, IconButton, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import Image from 'next/image';

//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Main = () => {
  return (
    <Box
      h="693px"
      color="#fff"
      w="1180px"
      mx="auto"
      mb="3.375rem"
      bgColor={'primary.800'}
      display="flex"
      justifyContent={'center'}
      pt={'3.375rem'}
    >
      <Box h={'82px'} width="600px">
        <Swiper
          direction="horizontal"
          mousewheel={true}
          modules={[Mousewheel]}
          centeredSlides={true}
          spaceBetween={32}
          slidesPerView={7}
          loop={true}
          onSlideChange={s => {
            const indexCurrentSlide = s.activeIndex;
            const currentSlide = s.slides[indexCurrentSlide];
            const nextSlide = s.slides[indexCurrentSlide + 1];
            const prevSlide = s.slides[indexCurrentSlide - 1];
            console.log(currentSlide);
          }}
          onEnded={() => console.log('swiper end')}
          initialSlide={3}
        >
          <SwiperSlide>
            <>
              <Center flexDir="column" gap={3}>
                <IconButton
                  aria-label={'خرید مانیتور'}
                  w="4.5rem"
                  h="4.5rem"
                  borderRadius="full"
                  border="1px"
                  borderColor="iconcolor"
                  bgColor="transparent"
                  icon={
                    <Image
                      src="/assets/img/motherbord_active.png"
                      height={50}
                      width={48}
                    />
                  }
                />
                <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                  مادر بورد
                </Text>
              </Center>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="iconcolor"
                bgColor="transparent"
                icon={
                  <Image
                    src="/assets/img/ram_active.png"
                    height={56}
                    width={48}
                  />
                }
              />
              <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                حافظه رم
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="iconcolor"
                bgColor="transparent"
                icon={
                  <Image
                    src="/assets/img/hard_active.png"
                    height={56}
                    width={48}
                  />
                }
              />
              <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                هارد دیسک
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="activecolor"
                bgColor="activecolor"
                icon={
                  <Image src="/assets/img/img.png" height={96} width={96} />
                }
                boxShadow="0px 14px 24px rgba(24, 133, 255, 0.2)"
              />
              <Text color={'activecolor'} fontSize={'sm'} fontWeight="medium">
                فن کیس
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="iconcolor"
                bgColor="iconcolor"
                icon={
                  <Image src="/assets/img/ssd.svg" height={56} width={48} />
                }
              />
              <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                حافظه SSD
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="iconcolor"
                bgColor="iconcolor"
                icon={
                  <Image src="/assets/img/wrong.svg" height={56} width={48} />
                }
              />
              <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                کیس
              </Text>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <Center flexDir="column" gap={3}>
              <IconButton
                aria-label={'خرید مانیتور'}
                w="4.5rem"
                h="4.5rem"
                borderRadius="full"
                border="1px"
                borderColor="iconcolor"
                bgColor="iconcolor"
                icon={<Image src="/assets/img/tv.svg" height={56} width={48} />}
              />
              <Text color={'menutcolor'} fontSize={'sm'} fontWeight="medium">
                مانیتور
              </Text>
            </Center>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Main;
