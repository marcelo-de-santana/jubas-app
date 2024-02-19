import {ColorName, colors} from '@styles';
import {View, ViewProps} from 'react-native';

interface ViewSeparatorProps extends ViewProps {
  size?: number;
  color?: ColorName;
}

export function Separator({
  color = 'lavenderGray',
  ...props
}: ViewSeparatorProps) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: colors[color],
      }}
      {...props}
    />
  );
}
