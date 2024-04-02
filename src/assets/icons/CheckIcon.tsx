import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function CheckIcon({size, color}: Readonly<IconBase>) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </Svg>
  );
}
