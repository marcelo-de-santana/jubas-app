import {
  MinimalUserResponseDTO,
  getAllUsersByPermissionRepo,
} from '@repositories';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {LoadingScreenPage, ModalItems, WhiteItemButton} from '@components';

export type UserListProps = {id: number};

export function UserList({id}: UserListProps) {
  const [userData, setUserData] = useState<MinimalUserResponseDTO[]>([]);

  async function searchData() {
    const response = await getAllUsersByPermissionRepo(id);
    setUserData(response);
  }

  return (
    <ModalItems>
      <FlatList
        data={userData}
        keyExtractor={userData => userData.id}
        renderItem={({item}) => <WhiteItemButton title={item.email} />}
        ListEmptyComponent={<LoadingScreenPage searchData={searchData} />}
      />
    </ModalItems>
  );
}
