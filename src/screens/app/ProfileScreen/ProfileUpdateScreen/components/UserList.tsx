import {FlatList} from 'react-native';
import {UserListItem} from './UserListItem';
import {ListSeparator, PermissionsMenu} from '@components';
import {useQueryClient} from '@tanstack/react-query';
import {QueryKeys} from '@hooks';
import {useState} from 'react';

type UserListProps = {
  selectedUserId: string;
  handleSelectedUserId: (userId: string) => void;
};

export function UserList({
  selectedUserId,
  handleSelectedUserId,
}: UserListProps) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData([QueryKeys.UserGetAll]);

  const [userPermission, setUserPermission] = useState<string>('CLIENTE');

  if (Array.isArray(data)) {
    const filteredUsers = data?.filter(
      user => user.permission === userPermission,
    );

    const filterPermission = (permission: string) => {
      setUserPermission(permission.toLocaleUpperCase());
    };

    return (
      <>
        <PermissionsMenu
          filterPermission={filterPermission}
          userPermission={userPermission}
        />
        <FlatList
          data={filteredUsers}
          renderItem={props => (
            <UserListItem
              selectedUserId={selectedUserId}
              handleSelectedUserId={handleSelectedUserId}
              {...props}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </>
    );
  }
}
