export const colorRegistry = {
  black: '#000000',
  'black-transparent': '#000000E6',
  'midnight-blue': '#161C26',
  'midnight-blue-transparent': '#161C2660',
  'steel-blue': '#3C4659',
  'blue-gray': '#9BA7BF',
  'lavender-gray': '#CCCED9',
  'light-gray': '#F2F2F2',
  'light-green': '#225522',
  white: '#FFFFFF',
  red: '#EA3838',
};

export type ColorType = typeof colorRegistry;
export type ColorName = keyof ColorType;
