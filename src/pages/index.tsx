import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Img,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useDisclosure,
  VStack,
  useRadioGroup,
  SlideFade,
} from '@chakra-ui/react';
import {
  BriefCaseIcon,
  CheckCircleIcon,
  CheckFullIcon,
  CloseCircleIcon,
  CodeIcon,
  CpuIcon,
  DesignIcon,
  EngineerIcon,
  GameIcon,
  HamburgerIcon,
  OrderSuccess,
  PinIcon,
  ProductFullIcon,
  SubtractIcon,
} from 'components/common/Icons';
import { GetServerSideProps } from 'next';
import MenuDrawer from 'components/assembly/MenuDrawer';
import LandingSlider from 'components/assembly/LandingSlider';
import { useRouter } from 'next/router';
import CustomRadio from 'components/assembly/CustomRadio';
import isMobile from 'ismobilejs';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(
  () => import('../components/assembly/VideoPlayer'),
  {
    ssr: false,
  }
);

const optionsList = [
  { Icon: <BriefCaseIcon boxSize="42px" />, text: 'اداری', value: 'ssd' },
  { Icon: <EngineerIcon boxSize="42px" />, text: 'مهندسی', value: 'ram' },
  { Icon: <DesignIcon boxSize="42px" />, text: 'طراحی و هنر', value: 'case' },
  { Icon: <GameIcon boxSize="42px" />, text: 'بازی', value: 'motherboard' },
  {
    Icon: <CodeIcon boxSize="42px" />,
    text: 'برنامه نویسی',
    value: 'manitor',
  },
];

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

const Home = ({ isMobile }: { isMobile: string }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const Disclosure = useDisclosure({ defaultIsOpen: true });
  const router = useRouter();
  const { value, getRadioProps } = useRadioGroup({
    defaultValue: isMobile ? 'ram' : 'case',
  });
  return (
    <>
      <Box w="full" minH="100vh" bg="#F4F9FF">
        <Box
          as="header"
          bgColor="#ffffff30"
          h={['4.75rem', '5.75rem', '6.75rem']}
        >
          <Container maxW="1440px" h="full">
            <HStack
              maxW="1045px"
              h="full"
              mx="auto"
              justify="space-between"
              px={5}
            >
              <Link href="/">
                <Img
                  src="https://res.cloudinary.com/rixso/image/upload/v1661052546/rixsoShop/logos/logo_whdzt5.svg"
                  alt="رکسو شاپ"
                  w={['110px', '120px', '130px']}
                  cursor="pointer"
                />
              </Link>
              <IconButton
                display={['block', 'block', 'none']}
                icon={<HamburgerIcon boxSize={9} />}
                aria-label="menu"
                onClick={onOpen}
              />
              <List
                display={['none', 'none', 'flex']}
                gap="55px"
                color="textsecondary"
                fontSize="2xl"
                transition="all 2s ease"
                css={{
                  '& li': {
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all .3s ease-in-out',
                  },
                  '& li:hover': {
                    color: '#FC1B50',
                  },
                  '& li:active': { color: '#1E385F' },
                }}
              >
                <ListItem>صفحه اول</ListItem>
                <ListItem>تماس با ما</ListItem>
                <ListItem>درباره‌ما</ListItem>
                <ListItem>دست دوم</ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  fontWeight="semibold"
                  color="#FC1B50"
                  _hover={{ color: '#1E385F !important' }}
                  _active={{ color: ' #FC1B50 !important' }}
                >
                  <ListIcon as={PinIcon} />
                  محصولات ویژه
                </ListItem>
              </List>
            </HStack>
          </Container>
        </Box>
        <Container
          as="main"
          maxW="1440"
          overflow="hidden"
          p="0"
          pos="relative"
          _before={{
            content: "''",
            w: '50%',
            h: '36%',
            pos: 'absolute',
            top: '24%',
            left: '-18%',
            pointerEvents: 'none',
            bgImage:
              "url('https://res.cloudinary.com/rixso/image/upload/v1661880456/rixsoShop/landingSlider/pattern_hbwqdl.png')",
            bgSize: 'contain',
          }}
          _after={{
            content: "''",
            w: '50%',
            h: '36%',
            pos: 'absolute',
            top: '10%',
            overflow: 'none',
            right: '-18%',
            pointerEvents: 'none',
            bgImage:
              "url('https://res.cloudinary.com/rixso/image/upload/v1661880456/rixsoShop/landingSlider/pattern_hbwqdl.png')",
            bgSize: 'contain',
            bgRepeat: 'no-repeat',
          }}
        >
          <LandingSlider />
          <SlideFade in={Disclosure.isOpen} offsetX={30} offsetY={0}>
            <Alert
              bgColor="#D7F5FE"
              border="1px solid #B7E6F5 "
              w={['98%', '560px', '620px']}
              h="84px"
              display={Disclosure.isOpen ? 'flex' : 'none'}
              rounded="12px"
              mx="auto"
              my={['28px', '38px', '48px']}
              gap={['10px', '20px', '24px']}
              p={['.5rem .2rem', '1.5rem 1rem', '1rem .75rem']}
              pos="relative"
              zIndex="2"
            >
              <OrderSuccess boxSize="56px" />
              <Box>
                <AlertTitle color="#405C87" fontSize={['xxs', 'sm', 'xl']}>
                  کاربر گرامی تشکر میکنیم که ریکسوشاپ را برای خرید انتخاب کرده
                  اید
                </AlertTitle>
                <AlertDescription
                  color="textsecondary"
                  fontSize={['9px', 'sm']}
                  opacity=".6"
                >
                  لطفا برای ارائه بهترین پیشنهاد برای اسمبل سیستم, با تکمیل فرم
                  زیر, ما را یاری نمایید
                </AlertDescription>
              </Box>
              <IconButton
                display={'block'}
                pos={['absolute', 'static']}
                top="25%"
                left="-1%"
                mr={['none', 'auto']}
                icon={<CloseCircleIcon boxSize="28px" />}
                aria-label="close"
                variant="unstyled"
                opacity=".6"
                isRound
                onClick={Disclosure.onToggle}
              />
            </Alert>
          </SlideFade>
          <Heading
            textAlign="center"
            fontWeight="extrabold"
            fontSize={['xl', '2xl', '17px']}
            mb="38px"
            mt={Disclosure.isOpen ? 'unset' : '38px'}
            pos="relative"
            zIndex="2"
          >
            نوع کاربری سیستم خود را انتخاب نمایید
          </Heading>
          <Center
            flexWrap={['wrap', 'nowrap']}
            mx="auto"
            w={['300px', '530px']}
            gap={['8px', '18px']}
            mb="50px"
            pos="relative"
            zIndex="2"
          >
            {optionsList.map(opt => (
              <CustomRadio
                key={opt.value}
                icon={opt.Icon}
                label={opt.text}
                {...getRadioProps({ value: opt.value })}
              />
            ))}
          </Center>
          <Button
            mx="auto"
            mb={['96px', '196px']}
            display="block"
            color="#fff"
            bgColor="primary.500"
            _hover={{ bgColor: 'primary.800' }}
            _active={{ bgColor: 'primary.600' }}
            w="180px"
            h="44px"
            onClick={() =>
              router.push({
                pathname: '/shop',
                query: { category: value },
              })
            }
          >
            مرحله بعد
          </Button>
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
                <Box
                  pos="absolute"
                  top={['0', '-16%']}
                  right={['unset', '.5rem']}
                >
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
                  ریکسوشاپ بر اصل اعتماد بین ما و مشتریانمان استوار است. سیستم
                  اسمبل آنلاین این مجموعه با کیفیت و قیمتی منصفانه ارائه شده
                  است. خرید کامپیوتر کار خسته کننده ای است زیرا به تحقیقاتی
                  زیادی نیاز دارد. همچنین، این احتمال وجود دارد که ممکن است همه
                  اجزا و قطعات را پیدا نکنید و یا قطعات با یکدیگر سازگار نباشند.
                  <br />
                  ریکسوشاپ به عنوان یک مقصد آنلاین برای تمام نیازهای سیستم شخصی
                  و اسمبل سیستم در خدمت شماست. درک و برآوردن نیازهای هر کاربر
                  شعار ماست. ما به ارائه محصولات با کیفیت و استاندارد اعتقاد
                  داریم. ما در تلاش هستیم تا با توجه به نیاز و بودجه شما بهترین
                  محصولات را برای اسمبل آنلاین ارائه دهیم. تمرکز اصلی ما ارائه
                  محصول با بهترین کیفیت، همراه با پشتیبانی فنی درجه یک است. قبل
                  از اینکه محصول نهایی اسمبل آنلاین به دست شما برسد، تست های
                  مختلف را پشت سر می گذارد و تنها محصولاتی که از همه موانع عبور
                  می کنند به دست مشتری نهایی می رسند.ما طیف گسترده ای از محصولات
                  را در ریکسوشاپ داریم. تمامی محصولات پیشنهاد شده به منظور اسمبل
                  آنلاین 100% اصل و با کیفیت هستند. ما معتقدیم که نباید در کیفیت
                  سازشی وجود داشته باشد.
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
                  <Center
                    w="46px"
                    h="46px"
                    bgColor={feature.bgColor}
                    rounded="8px"
                  >
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
          <Center
            as="footer"
            h="57px"
            bgColor="white"
            px={4}
            py={8}
            textAlign="center"
          >
            <Text color="#879DBF" fontSize="14px">
              استفاده از مطالب فروشگاه اینترنتی ریکسوشاپ فقط برای مقاصد غیرتجاری
              و با ذکر منبع بلامانع است.
            </Text>
          </Center>
        </Container>
      </Box>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  return {
    props: { isMobile: isMobile(userAgent).any },
  };
};
