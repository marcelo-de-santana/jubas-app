import {Pressable} from 'react-native';
import {
  AddIcon,
  ArrowLeft,
  ArrowRight,
  CheckBoxBlank,
  CheckBoxChecked,
  CheckIcon,
  CloseIcon,
  CreditCardIcon,
  DebitCardIcon,
  EditIcon,
  ExitIcon,
  LockIcon,
  PersonIcon,
  PixIcon,
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
  size = 20,
  onPress,
}: Readonly<IconProps>) {
  const {colors} = useAppTheme();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  AddIcon: AddIcon,
  ArrowLeft: ArrowLeft,
  ArrowRight: ArrowRight,
  CheckBoxBlank: CheckBoxBlank,
  CheckBoxChecked: CheckBoxChecked,
  CheckIcon: CheckIcon,
  CloseIcon: CloseIcon,
  CreditCardIcon: CreditCardIcon,
  DebitCardIcon: DebitCardIcon,
  EditIcon: EditIcon,
  ExitIcon: ExitIcon,
  LockIcon: LockIcon,
  PersonIcon: PersonIcon,
  PixIcon: PixIcon,
  TrashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
