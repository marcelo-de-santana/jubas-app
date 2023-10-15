import {ColorName} from '@styles';
import {Icon, IconName} from './Icon';

interface IconStatusProp {
  status: boolean;
}

export function IconStatus({status}: IconStatusProp) {
  let name: IconName = 'ToggleOffIcon';
  let color: ColorName = 'red';

  if (status) {
    name = 'ToggleOnIcon';
    color = 'light-green';
  }
  return <Icon name={name} color={color} />;
}
