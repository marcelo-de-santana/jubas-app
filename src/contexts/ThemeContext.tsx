import {ThemeProvider as RestyleThemeProvider} from '@shopify/restyle';
import {darkTheme, lightTheme} from '@styles';
import {ReactNode} from 'react';
import {Appearance} from 'react-native';

type ThemeProviderProps = {children: ReactNode};

export function ThemeProvider({children}: ThemeProviderProps) {
  return (
    <RestyleThemeProvider
      theme={Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme}>
      {children}
    </RestyleThemeProvider>
  );
}
