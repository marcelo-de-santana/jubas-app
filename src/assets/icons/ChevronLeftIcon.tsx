import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function ChevronLeftIcon({size = 20, color = '#3C4659'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </Svg>
  );
}
