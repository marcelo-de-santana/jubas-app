import {UserProfileProps} from '@routes';
import {ProfileList} from './components/ProfileList';
import {Screen} from '@components';
import {ModalProvider} from '@contexts';

export function UserProfileScreen({route}: UserProfileProps) {
  return (
    <Screen>
      <ModalProvider>
        <ProfileList params={route.params}></ProfileList>
      </ModalProvider>
    </Screen>
  );
}
