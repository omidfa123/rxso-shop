import { Box } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const picDetails = [
  {
    src: 'https://res.cloudinary.com/rixso/image/upload/v1661855355/rixsoShop/landingSlider/hhd_a1cp4h.webp',
    srcMobil:
      'https://res.cloudinary.com/rixso/image/upload/v1661855356/rixsoShop/landingSlider/hdd-ext-mobile_as6wks.webp',
    alt: 'hhd',
  },
  {
    src: 'https://res.cloudinary.com/rixso/image/upload/v1661855364/rixsoShop/landingSlider/cpu_f3rbvs.webp',
    srcMobil:
      'https://res.cloudinary.com/rixso/image/upload/v1661855356/rixsoShop/landingSlider/cpu-mobile_gwyd2a.webp',
    alt: 'cpu',
  },
  {
    src: 'https://res.cloudinary.com/rixso/image/upload/v1661855356/rixsoShop/landingSlider/ssd_kfffgg.webp',
    srcMobil:
      'https://res.cloudinary.com/rixso/image/upload/v1661855362/rixsoShop/landingSlider/ssd-mobile_twqzxk.webp',
    alt: 'ssd',
  },
];

export default function LandingSlider() {
  return (
    <Box dir="ltr" pos="relative" zIndex="2">
      <Splide
        aria-label="عکس هایی برای  توضیح این سایت"
        tag="section"
        options={{
          start: 1,
          breakpoints: {
            640: {
              arrows: false,
            },
          },
        }}
      >
        {picDetails.map(pic => (
          <SplideSlide key={pic.alt}>
            <picture>
              <source media="(min-width:58em)" srcSet={pic.src} />
              <source media="(max-width:36em)" srcSet={pic.srcMobil} />

              <img src={pic.src} alt="ssd" />
            </picture>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}
