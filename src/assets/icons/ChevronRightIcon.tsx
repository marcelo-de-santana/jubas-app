import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function ChevronRightIcon({size = 20, color = '#3C4659'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </Svg>
  );
}
