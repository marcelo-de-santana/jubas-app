import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {
  AddIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  LockIcon,
  PersonIcon,
  TrashIcon,
} from '@assets';
import {ButtonStyleName, ColorName, buttonStyle, colorRegistry} from '@styles';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ColorName;
  size?: number;
  onPress?: () => void;
  type?: ButtonStyleName;
  backgroundColor?: ColorName;
  style?: ViewStyle;
}

export function Icon({
  name,
  color = 'steelBlue',
  size,
  onPress,
  type,
  backgroundColor,
  style,
}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const $buttonType = type && buttonStyle[type];
  const $buttonStyle = {
    backgroundColor: backgroundColor && colorRegistry[backgroundColor],
    ...style,
  };

  if (onPress) {
    return (
      <Pressable style={[$buttonType, $buttonStyle]} onPress={onPress}>
        <SVGIcon color={colorRegistry[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colorRegistry[color]} size={size} />;
}

const iconRegistry = {
  AddIcon: AddIcon,
  CheckIcon: CheckIcon,
  ChevronLeftIcon: ChevronLeftIcon,
  ChevronRightIcon: ChevronRightIcon,
  CloseIcon: CloseIcon,
  EditIcon: EditIcon,
  LockIcon: LockIcon,
  PersonIcon: PersonIcon,
  TrashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
