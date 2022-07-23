import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import '../src/styles/fonts.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
