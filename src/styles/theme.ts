import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

/* const theme = {
  colors: {
    background: '#0d0d0d',
    text: '#fcfdfe',
    primary: '#16369b',
  },
}; */

export default customTheme;
