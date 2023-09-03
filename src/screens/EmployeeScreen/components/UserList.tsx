import {
  MinimalUserResponseDTO,
  getAllUsersByPermissionRepo,
} from '@repositories';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {LoadingScreen, WhiteItemButton} from '@components';

export type UserListProps = {
  id: number;
  handleFormData: (key: string, value: string) => void;
};

export function UserList({id, handleFormData}: UserListProps) {
  const [userData, setUserData] = useState<MinimalUserResponseDTO[]>([]);

  async function searchData() {
    setUserData(await getAllUsersByPermissionRepo(id));
  }

  function renderItem({item}: {item: MinimalUserResponseDTO}) {
    return (
      <WhiteItemButton
        title={item.email}
        onPress={() => handleFormData('email', item.email)}
      />
    );
  }

  return (
    <FlatList
      data={userData}
      keyExtractor={userData => userData.id}
      renderItem={renderItem}
      ListEmptyComponent={<LoadingScreen searchData={searchData} />}
    />
  );
}
