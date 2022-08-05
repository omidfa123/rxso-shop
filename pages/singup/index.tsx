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
import { NextPage } from 'next';
import * as React from 'react';
import { PasswordField } from 'src/components/common/PasswordField';
import {
  GitHubIcon,
  GoogleIcon,
  TwitterIcon,
} from '../../src/components/common/ProviderIcons';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import axios from 'axios';

export const Singup: NextPage = () => {
  const router = useRouter();
  const [regInfo, setRegInfo] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const handleRegister = async () => {
    const req = await axios.post('/api/auth/register', regInfo);
    const { data } = req;
    console.log(data);
    if (data.success) {
      router.push('/login');
    } else {
      alert(data.message);
    }
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
              src="/assets/img/logo-high.png"
              alt="رکسو شاپ"
              height={57}
              width={286}
              style={{ marginRight: 'auto', marginLeft: 'auto' }}
            />
            <Heading size={useBreakpointValue({ base: 'xs', md: '5xl' })}>
              ساختن حساب کاربری جدید
            </Heading>
            <HStack spacing="1" justify="center">
              <Text>حساب کاربری دارید؟</Text>
              <Button
                variant="link"
                colorScheme="blue"
                onClick={() => router.push('/login')}
              >
                ورود
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
                <FormLabel htmlFor="text">نام</FormLabel>
                <Input
                  id="text"
                  type="text"
                  value={regInfo.name}
                  onChange={e =>
                    setRegInfo({ ...regInfo, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">ایمیل</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={regInfo.email}
                  onChange={e =>
                    setRegInfo({ ...regInfo, email: e.target.value })
                  }
                />
              </FormControl>
              <Box>
                <PasswordField
                  value={regInfo.password}
                  onChange={e =>
                    setRegInfo({ ...regInfo, password: e.target.value })
                  }
                />
                <Text fontSize="sm" color="textsecondary" mt={4} mr={2}>
                  رمز عبور باید حداقل 6 کاراکتر باشد
                </Text>
              </Box>
            </Stack>

            <Stack spacing="6">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={handleRegister}
              >
                ساختن حساب کاربری
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
                  <Button key={name} width="full">
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

export default Singup;
