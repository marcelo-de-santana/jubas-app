import {StyleSheet} from 'react-native';

export const text = StyleSheet.create({
  textMenu: {
    color: 'white',
    textAlign: 'center',
  },
  textHeader: {
    color: '#000',
    fontSize: 16,
    paddingLeft: 5,
    paddingBottom: 4,
  },
  textHeaderMiddle: {
    color: '#000',
    fontSize: 18,
  },
  whiteText16: {
    color: 'white',
    fontSize: 16,
  },
  whiteText18: {
    color: 'white',
    fontSize: 18,
  },
  whiteText20: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 4,
  },
  whiteTextCenter14: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  whiteTextCenter18: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  blueText14: {
    color: '#161C26',
    fontSize: 14,
  },
  blueTextCenter14: {
    color: '#161C26',
    fontSize: 14,
    textAlign: 'center',
  },
  blueTextCenter14W20: {
    color: '#161C26',
    fontSize: 14,
    textAlign: 'center',
    width: '20%',
  },
  blueText16: {
    color: '#161C26',
    fontSize: 16,
  },
  blueTextCenter16: {
    color: '#161C26',
    fontSize: 16,
    textAlign: 'center',
  },
  blueText18: {
    color: '#161C26',
    fontSize: 18,
  },
  blueTextCenter18: {
    color: '#161C26',
    fontSize: 18,
    textAlign: 'center',
  },
  blueText20: {
    color: '#161C26',
    fontSize: 20,
  },
  blueTextCenter20: {
    color: '#161C26',
    fontSize: 20,
    textAlign: 'center',
  },
  redText20: {
    color: 'red',
    fontSize: 20,
  },
});

export const fontSizeRegistry = {
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
};

export type FontSizeName = keyof typeof fontSizeRegistry;

export type textAlignType =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;
