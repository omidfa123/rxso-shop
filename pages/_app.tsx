import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import '../src/styles/globals.css';
import '../src/styles/fonts.css';
import type { AppProps } from 'next/app';

//

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
