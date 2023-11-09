import {ColorName, colorRegistry} from '@styles';
import {View, ViewProps} from 'react-native';

interface ViewSeparatorProps extends ViewProps {
  size?: number;
  color?: ColorName;
}

export function Separator({
  color = 'lavender-gray',
  ...props
}: ViewSeparatorProps) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: colorRegistry[color],
      }}
      {...props}
    />
  );
}
