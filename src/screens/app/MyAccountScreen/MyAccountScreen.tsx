import {Box, ListSeparator, Screen, Text, TouchableOpacity} from '@components';
import {useAuthContext} from '@contexts';
import {ProfileResponse, useProfileUpdate, useUserGetById} from '@domain';
import {mask} from '@utils';
import {ModalUser} from './components/ModalUser';
import {ModalProfile} from './components/ModalProfile';
import {ReactNode} from 'react';
import {ProfileList} from './components/ProfileLIst';
import {ProfileAdd} from './components/ProfileAdd';

export function MyAccountScreen() {
  const {user: userCredentials} = useAuthContext();

  if (userCredentials) {
    const {data: user} = useUserGetById(userCredentials?.id);

    return (
      <Screen>
        <Text variant="paragraphMedium" textAlign="justify">
          Usuário
        </Text>

        {user && (
          <ModalUser user={user}>
            <Text textAlign="justify">{'E-mail: ' + user.email}</Text>
            <Text textAlign="justify">Senha: ********</Text>
          </ModalUser>
        )}

        <ListSeparator mb="s12" />

        <Text variant="paragraphMedium" textAlign="justify">
          {user?.profiles && user.profiles.length > 1 ? 'Perfis' : 'Perfil'}
        </Text>

        {user?.profiles && (
          <>
            <ProfileList profiles={user?.profiles} />

            <ProfileAdd userId={user.id} />
          </>
        )}
      </Screen>
    );
  }
}
