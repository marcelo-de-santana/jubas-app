import {Pressable} from 'react-native';
import {
  AddIcon,
  CheckBoxBlank,
  CheckBoxChecked,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  LockIcon,
  PersonIcon,
  TrashIcon,
} from '@assets';
import {ThemeColors} from '@styles';
import {useAppTheme} from '@hooks';
export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'primaryContrast',
  size,
  onPress,
}: Readonly<IconProps>) {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  AddIcon: AddIcon,
  CheckBoxBlank: CheckBoxBlank,
  CheckBoxChecked: CheckBoxChecked,
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
