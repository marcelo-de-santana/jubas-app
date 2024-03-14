import {useAppTheme} from '@hooks';
import {ThemeColors} from '@styles';
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color?: ThemeColors;
}

export function ActivityIndicator({
  color = 'primaryContrast',
  size = 'large',
  ...props
}: Readonly<ActivityIndicatorProps>) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator size={size} color={colors[color]} {...props} />;
}
