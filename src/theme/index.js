import {getSize} from '@utils/responsive';
import {Platform} from 'react-native';
const lineScale = 1.34;

export const createTextStyle = (textSize, typeFont = 'regular') => ({
  fontFamily: theme.fonts.fontFamily[typeFont],
  fontSize: getSize.s(textSize) || getSize.s(11),
  // lineHeight: Math.round((textSize || getSize.s(11)) * lineScale),
  fontWeight: theme.fonts.fontWeight[typeFont],
});

export const theme = {
  colors: {
    transparent: 'transparent',
    text: '#242424',
    background: '#f5f5f5',
    orange: '#FE930F',
    lightGray: '#F8F8FF',
    gray: '#424242',
    smoke: '#E6E6E6',
    white: '#ffffff',
    black: '#000000',
    placeholder: '#707070',
    blue: '#0095FF',
    red: '#E83625',
    gradient: ['#F04831', '#E73222', '#D9100C'],
    green: '#088A08',
    lightGreen: '#29bb89',
    yellow: '#FFDF00',
    dark: '#00000060',
    bg_opacity: '#00000050',
    gray2: '#9A9A9A',
    darkRed: '#BF0404',
    darkBlue: '#735BF2',
    lightRed: '#FA634D',
    btnColor: ['#002366', '#002366', '#002366'],
    lightBlue: '#5BAAFF',
    primaryColor: '#0163BF',
    lightSky: '#DDEDFF',
    investment: '#00509E',
    secondary: '#00234C',
    grayInput: '#EAEAEA',
    backgroundInput: '#E1E1E1',
    backgroundTypeProject: '#003D70',
    stroke: '#0073e6',
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
      medium: '500',
    },
    fontFamily: {
      bold: 'Inter-Bold',
      semibold: 'Inter-SemiBold',
      medium: 'Inter-Medium',
      regular: 'Inter-Regular',
      light: 'Inter-Light',
    },
  },
};
