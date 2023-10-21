export const fontSizeRegistry = {
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
};

export type FontSizeName = keyof typeof fontSizeRegistry;

export type fontAlignType =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;
