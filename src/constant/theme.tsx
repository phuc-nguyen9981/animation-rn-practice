import {DefaultTheme} from '@react-navigation/native';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#bababa',
    white: '#f6f6f6',
  },
  spacing: (num: number): number => num * 8,
  textStyles: {
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 22,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    display1: {
      fontSize: 120,
    },
    display2: {
      fontSize: 40,
    },
    paragraph1: {
      fontSize: 14,
    },
    paragraph2: {
      fontSize: 12,
    },
    button1: {
      fontSize: 16,
    },
    button2: {
      fontSize: 14,
    },
    symbol: {
      fontSize: 14,
    },
  },
};

export default CustomTheme;
