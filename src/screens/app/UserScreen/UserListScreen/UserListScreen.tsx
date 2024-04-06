import {Screen, FlatList} from '@components';
import {useUserGetAll} from '@domain';
import {UserStackProps} from '@routes';
import {useState} from 'react';
import {PermissionsMenu} from './components/PermissionsMenu';
import {UserListItem} from './components/UserListItem';

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
  );
}
