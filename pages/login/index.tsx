import {
  Box,
  Button,
  ButtonGroup,
  VisuallyHidden,
  Checkbox,
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
import { PasswordField } from '../../src/components/common/PasswordField';
import {} from '@chakra-ui/react';
import {
  GitHubIcon,
  GoogleIcon,
  TwitterIcon,
} from '../../src/components/common/ProviderIcons';

export const Login: NextPage = () => {
  const providers = [
    { name: 'Google', icon: <GoogleIcon boxSize="5" /> },
    { name: 'Twitter', icon: <TwitterIcon boxSize="5" /> },
    { name: 'GitHub', icon: <GitHubIcon boxSize="5" /> },
  ];

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: '5xl' })}>
              به حساب کاربری خود وارد شوید
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <ButtonGroup variant="outline" spacing="4" width="full">
                {providers.map(({ name, icon }) => (
                  <Button key={name} width="full">
                    <VisuallyHidden>Sign in with {name}</VisuallyHidden>
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
