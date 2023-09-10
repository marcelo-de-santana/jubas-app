import {Pressable} from 'react-native';
import {AddIcon} from '../../assets/icons/AddIcont';

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  OnPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export function Icon({name, color, size, OnPress}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (OnPress) {
    return (
      <Pressable hitSlop={10} onPress={OnPress}>
        <SVGIcon color={color} size={size} />;
      </Pressable>
    );
  }

  return <SVGIcon color={color} size={size} />;
}

const iconRegistry = {
  addIcon: AddIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
