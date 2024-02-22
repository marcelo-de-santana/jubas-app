import {createTheme} from '@shopify/restyle';
import {Appearance, ViewStyle} from 'react-native';
import {buttons} from './buttons';
import {fontSize} from './fonts';

const palette = {
  black: '#000000',
  blackTransparent: '#000000E6',
  midnightBlue: '#161C26',
  midnightBlueTransparent: '#161C2660',
  steelBlue: '#3C4659',
  blueGray: '#9BA7BF',
  lavenderGray: '#CCCED9',
  lightGray: '#F2F2F2',
  lightGreen: '#225522',
  white: '#FFFFFF',
  red: '#EA3838',
};

const box = {
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flexRowList: {
    borderRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  item: {minHeight: 50},
};

const items = {
  header: {
    minHeight: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: 10,
  },
  line: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
    paddingHorizontal: 10,
  },
};

const defaults = {
  fontSize,
  box,
  items,
  buttons,
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s6: 6,
    s10: 10,
  },
};

export const darkTheme = createTheme({
  ...defaults,
  colors: {
    ...palette,

    primary: palette.midnightBlue,
    primaryContrast: palette.blueGray,

    backgroundPrimary: palette.midnightBlue,
    backgroundContrast: palette.blueGray,

    fontPrimary: palette.blueGray,
    fontContrast: palette.black,
  },

  buttons: buttons,
});

export const lightTheme = createTheme({
  ...defaults,
  colors: {
    ...palette,

    primary: palette.blueGray,
    primaryContrast: palette.midnightBlue,

    backgroundPrimary: palette.blueGray,
    backgroundContrast: palette.midnightBlue,

    fontPrimary: palette.black,
    fontContrast: palette.blueGray,
  },
});

export const theme =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export function flatListStyle(data: any = []): ViewStyle {
  return {
    flex: data?.length === 0 ? 1 : undefined,
  };
}
//DARK
// Background: #161C26 (Midnight Blue)
// Text: #9BA7BF (Blue Gray)
// Accent: #CCCED9 (Lavender Gray)
// Highlight: #FFFFFF (White)
//LIGHT
// Background: #9BA7BF (Blue Gray)
// Text: #000000 (Black)
// Accent: #161C26 (Midnight Blue)
// Highlight: #225522 (Light Green)

export type Theme = typeof theme;
export type ThemeColors = keyof (typeof theme)['colors'];
export type ThemeSpacing = keyof (typeof theme)['spacing'];
