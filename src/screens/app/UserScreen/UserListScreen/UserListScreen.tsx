import {Screen, FlatList, NavigationHeader, PermissionsMenu} from '@components';
import {useUserGetAll} from '@domain';
import {UserStackProps} from '@routes';
import {UserListItem} from './components/UserListItem';
import {useState} from 'react';

export function UserListScreen({
  navigation,
}: Readonly<UserStackProps<'UserListScreen'>>) {
  const {data, isPending, isError, refetch} = useUserGetAll();

  const [userPermission, setUserPermission] = useState<string>('CLIENTE');

  const filteredUsers = data?.filter(
    user => user.permission === userPermission,
  );

  const filterPermission = (permission: string) => {
    setUserPermission(permission.toLocaleUpperCase());
  };

  return (
    <>
      <NavigationHeader
        headerTitleProps={{title: 'Usuários'}}
        rightIconProps={{
          onPress: () => navigation.navigate('UserCreateScreen'),
        }}
      />

      <Screen flex={1}>
        <PermissionsMenu
          filterPermission={filterPermission}
          userPermission={userPermission}
        />
        <FlatList
          data={filteredUsers}
          renderItem={props => (
            <UserListItem navigation={navigation} {...props} />
          )}
          loading={isPending}
          error={isError}
          refetch={refetch}
          isSeparator={false}
        />
      </Screen>
    </>
  );
}
