import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  SlideFade,
  Spinner,
  useDisclosure,
  useRadioGroup,
  useToast,
} from '@chakra-ui/react';
import {
  BriefCaseIcon,
  CloseCircleIcon,
  CodeIcon,
  DesignIcon,
  EngineerIcon,
  GameIcon,
  OrderSuccess,
} from 'components/common/Icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomRadio from './CustomRadio';

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

export default function CallToActionSection() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const router = useRouter();
  const { value, getRadioProps } = useRadioGroup();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <SlideFade in={isOpen} offsetX={30}>
        <Alert
          bgColor="#D7F5FE"
          border="1px solid #B7E6F5 "
          w={['98%', '560px', '620px']}
          h="84px"
          display={isOpen ? 'flex' : 'none'}
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
              کاربر گرامی تشکر میکنیم که ریکسوشاپ را برای خرید انتخاب کرده اید
            </AlertTitle>
            <AlertDescription
              color="textsecondary"
              fontSize={['9px', 'sm']}
              opacity=".6"
            >
              لطفا برای ارائه بهترین پیشنهاد برای اسمبل سیستم, با تکمیل فرم زیر,
              ما را یاری نمایید
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
            onClick={onClose}
          />
        </Alert>
      </SlideFade>
      <Heading
        textAlign="center"
        fontWeight="extrabold"
        fontSize={['xl', '2xl', '17px']}
        mb="38px"
        mt={isOpen ? 'unset' : '38px'}
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
        display="flex"
        color="#fff"
        bgColor="primary.500"
        _hover={{ bgColor: 'primary.800' }}
        _active={{ bgColor: 'primary.600' }}
        w="180px"
        h="44px"
        isLoading={isLoading}
        loadingText="درحال ارسال"
        spinnerPlacement="end"
        spinner={<Spinner emptyColor="#ED1F1F" size="sm" />}
        onClick={() =>
          value
            ? (setIsLoading(true) as any) &
              (router.push(` /shop/${value}`, undefined, {
                shallow: true,
              }) as any)
            : toast({
                title: 'درخواست نامعتبر',
                description: 'لطفا نوع کاربری سیستم خود را مشخص کنید',
                status: 'error',
                duration: 3000,
                variant: 'left-accent',
                position: 'top-left',
              })
        }
      >
        مرحله بعد
      </Button>
    </>
  );
}
