import {ColorName, colorRegistry, theme, themeRegistry} from '@styles';
import {View, ViewProps} from 'react-native';

interface ViewSeparatorProps extends ViewProps {
  size?: number;
  color?: ColorName;
}

export function ViewSeparator({
  size = 0.5,
  color = 'lavender-gray',
  ...props
}: ViewSeparatorProps) {
  return (
    <View
      style={{
        borderBottomWidth: size,
        borderColor: colorRegistry[color],
      }}
      {...props}
    />
  );
}
