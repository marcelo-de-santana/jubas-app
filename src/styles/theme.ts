import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  createTheme,
} from '@shopify/restyle';
import {Appearance, ViewStyle} from 'react-native';
import {buttons} from './buttons';
import {
  colors,
  defaultDarkThemeBackgroundColors,
  defaultDarkThemeFontColors,
  defaultLightThemeBackgroundColors,
  defaultLightThemeFontColors,
} from './colors';
import {textVariants} from '@components';

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
  box,
  items,
  buttons,
  textVariants,
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
    ...defaultDarkThemeFontColors,
    ...defaultDarkThemeBackgroundColors,
    ...colors,
  },

  buttons: buttons,
});

export const lightTheme = createTheme({
  ...defaults,
  colors: {
    ...defaultLightThemeFontColors,
    ...defaultLightThemeBackgroundColors,
    ...colors,
  },
});

export const theme =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export type Theme = typeof theme;
export type ThemeColors = keyof (typeof theme)['colors'];
export type ThemeSpacing = keyof (typeof theme)['spacing'];

export type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export function flatListStyle(data: any = []): ViewStyle {
  return {
    flex: data?.length === 0 ? 1 : undefined,
  };
}
