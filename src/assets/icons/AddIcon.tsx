import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function AddIcon({size = 20, color = '#3C4659'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </Svg>
  );
}
