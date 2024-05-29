import {ListSeparator, Screen, Text} from '@components';
import {useUserGetById} from '@domain';
import {ModalUser} from './components/ModalUser';
import {ProfileList} from './components/ProfileLIst';
import {ProfileAdd} from './components/ProfileAdd';
import {AppStackProps} from '@routes';

export function MyAccountScreen({
  route: {
    params: {user: userCredentials},
  },
}: AppStackProps<'MyAccountScreen'>) {
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
