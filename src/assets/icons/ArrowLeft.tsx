import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function ArrowLeft({size, color}: Readonly<IconBase>) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </Svg>
  );
}
