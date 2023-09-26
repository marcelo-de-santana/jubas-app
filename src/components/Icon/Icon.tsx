import {Pressable} from 'react-native';
import {AddCircleIcon} from '../../assets/icons/AddCircleIcon';
import {ChevronLeftIcon} from '../../assets/icons/ChevronLeftIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {EditIcon} from '../../assets/icons/EditIcon';
import {ToggleOffIcon} from '../../assets/icons/ToggleOffIcon';
import {ToggleOnIcon} from '../../assets/icons/ToggleOnIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {ColorName, colorRegistry} from '@styles';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ColorName;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, color = 'steel-blue', size, onPress}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colorRegistry[color]} size={size} />;
      </Pressable>
    );
  }

  return <SVGIcon color={colorRegistry[color]} size={size} />;
}

const iconRegistry = {
  AddCircleIcon: AddCircleIcon,
  ChevronLeftIcon: ChevronLeftIcon,
  ChevronRightIcon: ChevronRightIcon,
  EditIcon: EditIcon,
  ToggleOffIcon: ToggleOffIcon,
  ToggleOnIcon: ToggleOnIcon,
  TrashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
