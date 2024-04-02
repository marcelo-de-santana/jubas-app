import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function ArrowRight({size, color}: Readonly<IconBase>) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </Svg>
  );
}
