import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import 'styles/globals.css';
import 'styles/fonts.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <NextNProgress
          color="#FC1B50"
          options={{
            showSpinner: false,
          }}
        />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  );
};
export default MyApp;
