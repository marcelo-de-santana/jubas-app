import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function CloseIcon({size = 20, color = '#3C4659'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </Svg>
  );
}
