import {ThemeColors, theme} from '@styles';
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color?: ThemeColors;
}

export function ActivityIndicator({
  color = 'steelBlue',
  size = 'large',
  ...props
}: Readonly<ActivityIndicatorProps>) {
  return (
    <RNActivityIndicator size={size} color={theme.colors[color]} {...props} />
  );
}
