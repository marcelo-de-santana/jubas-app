import {useNavigation} from '@react-navigation/native';
import {Icon, IconProps} from './Icon';

interface IconNavigationProps extends Partial<IconProps> {
  routeName?: string;
  params?: any;
}

export function IconNavigation({
  routeName,
  params,
  ...props
}: IconNavigationProps) {
  const {navigate} = useNavigation<any>();

  return (
    <Icon
      name={props.name ?? 'AddIcon'}
      size={props.size ?? 30}
      color={props.color ?? 'primaryContrast'}
      onPress={() => props.onPress ?? navigate(routeName, params)}
    />
  );
}
