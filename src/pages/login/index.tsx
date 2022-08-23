import {
  Box,
  Button,
  ButtonGroup,
  VisuallyHidden,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { PasswordField } from 'components/common/PasswordField';
import { GitHubIcon, GoogleIcon, TwitterIcon } from 'components/common/Icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export const Login: NextPage = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const { data } = useSession();
  if (data?.role === 'admin') {
    router.push('/dashboard');
  }
  if (data?.role === 'user') {
    router.push('/');
  }

  const handleLogin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      ...loginInfo,
    });
  };

  const providers = [
    { name: 'Google', icon: <GoogleIcon boxSize="5" /> },
    { name: 'Twitter', icon: <TwitterIcon boxSize="5" /> },
    { name: 'GitHub', icon: <GitHubIcon boxSize="5" /> },
  ];

  return (
    <Container maxW="lg" py={{ base: '12' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8" color="textsecondary">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Image
              src="https://res.cloudinary.com/rixso/image/upload/v1660976602/rixsoShop/logos/logoSecondary_vyncm5.png"
              alt="رکسو شاپ"
              height={189}
              width={851}
              priority
            />
            <Heading size={useBreakpointValue({ base: 'xs', md: '5xl' })}>
              به حساب کاربری خود وارد شوید
            </Heading>
            <HStack spacing="1" justify="center">
              <Text>حساب کاربری ندارید؟</Text>
              <Button
                variant="link"
                colorScheme="blue"
                onClick={() => router.push('/register')}
              >
                ثبت نام
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'white' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">ایمیل</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={loginInfo.email}
                  onChange={e =>
                    setLoginInfo({ ...loginInfo, email: e.target.value })
                  }
                />
              </FormControl>
              <PasswordField
                value={loginInfo.password}
                onChange={e =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
            </Stack>

            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              alignSelf="start"
            >
              بازیابی رمز عبور؟
            </Button>

            <Stack spacing="6">
              <Button variant="solid" colorScheme="blue" onClick={handleLogin}>
                ورود
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  یا ادامه دهید با
                </Text>
                <Divider />
              </HStack>
              <ButtonGroup variant="outline" spacing="4" width="full">
                {providers.map(({ name, icon }) => (
                  <Button
                    key={name}
                    width="full"
                    onClick={() => signIn('github')}
                  >
                    <VisuallyHidden>ثبت‌نام با {name}</VisuallyHidden>
                    {icon}
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
