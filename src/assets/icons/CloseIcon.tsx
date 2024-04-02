import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function CloseIcon({size, color}: Readonly<IconBase>) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </Svg>
  );
}
