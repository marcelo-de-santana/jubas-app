import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {
  MinimalUserResponseDTO,
  getAllUsersByPermissionRepo,
} from '@repositories';
import {SimpleListItem, LoadingScreen} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList, AppStackProps} from '@routes';

type UserListProps = {
  userPermissionId: number;
  navigation: NativeStackNavigationProp<AppStackParamList>;
};

export function UserList({navigation, userPermissionId}: UserListProps) {
  const [users, setUsers] = useState<MinimalUserResponseDTO[]>([]);

  useEffect(() => {
    searchData();
  }, [userPermissionId]);

  async function searchData() {
    setUsers(await getAllUsersByPermissionRepo(userPermissionId));
  }

  function changeScreen() {
    navigation.navigate('UnderConstruction');
  }

  function renderItem({item}: {item: MinimalUserResponseDTO}) {
    return <SimpleListItem textValues={[item.email]} onPress={changeScreen} />;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={users => users.id}
      renderItem={renderItem}
      ListEmptyComponent={
        <LoadingScreen searchData={searchData} title="Lista Vazia" />
      }
    />
  );
}
