import {DimensionValue, View, ViewProps} from 'react-native';
import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';

interface ScreenProps extends ViewProps {
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
  ...props
}: ScreenProps) {
  return (
    <View
      style={[
        themeRegistry[type],
        {
          backgroundColor: colorRegistry[color],
          padding: padding,
        },
      ]}
      {...props}>
      {children}
    </View>
  );
}
