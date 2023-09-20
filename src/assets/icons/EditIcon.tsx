import {IconBase} from '@components';
import {Path, Svg} from 'react-native-svg';

export function EditIcon({size = 20, color = '#3C4659'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 -960 960 960">
      <Path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
    </Svg>
  );
}


