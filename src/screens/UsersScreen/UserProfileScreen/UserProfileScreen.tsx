import {UserProfileProps} from '@routes';
import {ProfileList} from './components/ProfileList';
import {BlueButton, Screen} from '@components';
import {ModalProvider} from '@contexts';

export function UserProfileScreen({navigation, route}: UserProfileProps) {

  return (
    <Screen>
      <ModalProvider>
        <ProfileList goBack={navigation.goBack} params={route.params} />
      </ModalProvider>
    </Screen>
  );
}
