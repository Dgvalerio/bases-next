import React from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ReactOTronNoSSR } from '../config/ReactotronConfig';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ReactOTronNoSSR />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default MyApp;
