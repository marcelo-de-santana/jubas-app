import {ActivityIndicator} from 'react-native';
import {ColorName, colorRegistry} from '@styles';

type LoadingIndicatorProps = {
  color?: ColorName;
  size?: number | 'large' | 'small' | undefined;
};

export function LoadingIndicator({
  color = 'midnight-blue',
  size = 'large',
}: LoadingIndicatorProps) {
  return (
    <>
      <ActivityIndicator color={colorRegistry[color]} size={size} />
    </>
  );
}
