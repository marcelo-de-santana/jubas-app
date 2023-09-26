import {DimensionValue, SafeAreaView} from 'react-native';
import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';

interface ScreenProps {
  children: React.ReactNode;
  type?: ThemeName;
  color?: ColorName;
  padding?: DimensionValue;
}
export function Screen({
  children,
  type = 'container',
  color = 'light-gray',
  padding = 10,
}: ScreenProps) {
  return (
    <SafeAreaView
      style={[
        themeRegistry[type],
        {
          backgroundColor: colorRegistry[color],
          padding: padding,
        },
      ]}>
      {children}
    </SafeAreaView>
  );
}
