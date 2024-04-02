import {useNavigation} from '@react-navigation/native';
import {Icon, IconProps} from './Icon';

interface IconNavigationProps extends Omit<IconProps, 'onPress'> {
  routeName: string;
}

export function IconNavigation({
  routeName,
  ...props
}: Readonly<IconNavigationProps>) {
  const {navigate} = useNavigation<any>();

  return <Icon {...props} onPress={() => navigate(routeName)} />;
}
