import {ColorName, colorRegistry} from '@styles';
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color?: ColorName;
}

export function ActivityIndicator({
  color = 'steelBlue',
  size = 'large',
  ...props
}: ActivityIndicatorProps) {
  return (
    <RNActivityIndicator size={size} color={colorRegistry[color]} {...props} />
  );
}
