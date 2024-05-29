import {useAuthStore} from '@services';
import {Icon} from './Icon';

export function IconExit() {
  const {removeCredentials} = useAuthStore();
  return <Icon name="ExitIcon" size={20} onPress={removeCredentials} />;
}
