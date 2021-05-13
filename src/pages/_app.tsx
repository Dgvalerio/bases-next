import React from 'react';

import { Auth } from '@supabase/ui';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ReactOTronNoSSR } from '../config/ReactotronConfig';
import { supabase } from '../config/supabase';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Auth.UserContextProvider supabaseClient={supabase}>
    <ReactOTronNoSSR />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </Auth.UserContextProvider>
);

export default MyApp;
