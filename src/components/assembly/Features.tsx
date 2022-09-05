import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import {
  CheckCircleIcon,
  CheckFullIcon,
  CpuIcon,
  ProductFullIcon,
  SubtractIcon,
} from 'components/common/Icons';
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('../assembly/VideoPlayer'), {
  ssr: false,
});

const featureList = [
  {
    icon: <CheckFullIcon boxSize="24px" />,
    bgColor: '#34DDED',
    title: ' تست های فنی متختلف',
    subTitle: `قبل از اینکه محصول نهایی اسمبل آنلاین به دست شما برسد، تست های
  مختلف را پشت سر می گذارد و تنها محصولاتی که از همه موانع عبور
  می کنند.`,
  },
  {
    icon: <ProductFullIcon boxSize="24px" />,
    bgColor: '#E01DAA',
    title: 'انتخاب گسترده و محصول اصلی',
    subTitle: `   ما طیف گسترده ای از محصولات را در ریکسوشاپ داریم. تمامی
  محصولات پیشنهاد شده به منظور اسمبل آنلاین 100% اصل و با کیفیت
  هستند.`,
  },
  {
    icon: <SubtractIcon boxSize="24px" />,
    bgColor: '#115ED4',
    title: 'ارسال به سراسر کشور',
    subTitle: ` ما به سراسر کشور ارسال داریم. بنابراین هر کجا که باشید،
  کامپیوتر شما به موقع به درب منزل شما خواهد رسید.`,
  },
];
export default function Features() {
  return (
    <Box mb="98px" pos="relative">
      <Box bgColor="white" pt={['0', '156px']}>
        <VideoPlayer />
        <VStack
          pos="relative"
          spacing="24px"
          px={4}
          pb="136px"
          mb="58px "
          mx="auto"
          maxW="1045px"
        >
          <Box pos="absolute" top={['0', '-16%']} right={['unset', '.5rem']}>
            <CpuIcon />
          </Box>
          <Heading
            fontSize={['18px', '20px', '22px']}
            fontWeight="extrabold"
            alignSelf={['center', 'center', 'flex-start']}
          >
            خدمات اسمبل سیستم ریکسوشاپ
          </Heading>
          <Text fontSize={'14px'} letterSpacing="tight" lineHeight="1.7">
            ریکسوشاپ بر اصل اعتماد بین ما و مشتریانمان استوار است. سیستم اسمبل
            آنلاین این مجموعه با کیفیت و قیمتی منصفانه ارائه شده است. خرید
            کامپیوتر کار خسته کننده ای است زیرا به تحقیقاتی زیادی نیاز دارد.
            همچنین، این احتمال وجود دارد که ممکن است همه اجزا و قطعات را پیدا
            نکنید و یا قطعات با یکدیگر سازگار نباشند.
            <br />
            ریکسوشاپ به عنوان یک مقصد آنلاین برای تمام نیازهای سیستم شخصی و
            اسمبل سیستم در خدمت شماست. درک و برآوردن نیازهای هر کاربر شعار ماست.
            ما به ارائه محصولات با کیفیت و استاندارد اعتقاد داریم. ما در تلاش
            هستیم تا با توجه به نیاز و بودجه شما بهترین محصولات را برای اسمبل
            آنلاین ارائه دهیم. تمرکز اصلی ما ارائه محصول با بهترین کیفیت، همراه
            با پشتیبانی فنی درجه یک است. قبل از اینکه محصول نهایی اسمبل آنلاین
            به دست شما برسد، تست های مختلف را پشت سر می گذارد و تنها محصولاتی که
            از همه موانع عبور می کنند به دست مشتری نهایی می رسند.ما طیف گسترده
            ای از محصولات را در ریکسوشاپ داریم. تمامی محصولات پیشنهاد شده به
            منظور اسمبل آنلاین 100% اصل و با کیفیت هستند. ما معتقدیم که نباید در
            کیفیت سازشی وجود داشته باشد.
          </Text>
          <Center
            bgColor="#F4F9FF"
            rounded="full"
            w="156px"
            h="156px"
            pos="absolute"
            bottom={['-12%', '-22%']}
          >
            <CheckCircleIcon />
          </Center>
        </VStack>
      </Box>
      <Heading
        fontSize={['18px', '20px', '22px']}
        fontWeight="extrabold"
        zIndex="9"
        pos="relative"
        textAlign="center"
        mb="58px "
      >
        چرا ریکسوشاپ را برای اسمبل آنلاین انتخاب کنید؟
      </Heading>
      <Stack
        direction={['column', 'row']}
        spacing={['36px', '26px']}
        w={['100%']}
        mx="auto"
        justifyContent="center"
        px={4}
        textAlign="center"
      >
        {featureList.map(feature => (
          <VStack
            key={feature.title}
            spacing={6}
            w={['100%', '216px', '276px']}
          >
            <Center w="46px" h="46px" bgColor={feature.bgColor} rounded="8px">
              {feature.icon}
            </Center>
            <Text fontWeight="bold" color="textsecondary">
              {feature.title}
            </Text>
            <Text fontSize="14px" px={[12, 0]}>
              {feature.subTitle}
            </Text>
          </VStack>
        ))}
      </Stack>
    </Box>
  );
}
