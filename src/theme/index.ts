import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const semanticTokens = {
  colors: {
    text: {
      default: '#009688',
      _dark: '#FC1B50',
    },
  },
};
const colors = {
  primary: {
    900: '#33706a',
    800: '#257d74',
    700: '#00A797',
    600: '#18BBAA',
    500: '#009688',
  },
  secondary: {
    900: '#B7002B',
    800: '#D40133',
    700: '#F44A69',
    600: '#FF6E90',
    500: '#FC1B50',
  },
  textprimary: '#05162F',
  textsecondary: '#1E385F',
  textdisabled: '#B6C5DC',
  bgcolor: '#F7FAFF',
  bgdisabled: '#EDF1F6',
  strokecolor: '#CAD5E7',
};

const fonts = {
  body: `Peyda,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
  heading: `Peyda,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
};
const fontSizes = {
  xxs: ' 0.625rem',
  xs: '0.6875rem',
  sm: '0.75rem',
  md: '0.8125rem',
  xl: '0.875rem',
  '2xl': '1rem',
  '3xl': '1.25rem',
  '4xl': '1.5625rem',
  '5xl': '1.625rem',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};
const breakpoints = {
  sm: '23.5em',
  md: '46.5em',
  lg: '64em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme({
  config,
  semanticTokens,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
});

export default theme;
