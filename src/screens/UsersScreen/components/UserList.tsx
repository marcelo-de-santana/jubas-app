import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {MinimalUserResponseDTO, getAllUsersByPermission} from '@repositories';
import {SimpleItem, LoadingScreen, SimpleSeparator} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '@routes';

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
    setUsers(await getAllUsersByPermission(userPermissionId));
  }

  function changeScreen(userId: string, userEmail: string) {
    navigation.navigate('UserProfileScreen', {
      user: {id: userId, email: userEmail},
    });
  }

  function renderItem({item}: {item: MinimalUserResponseDTO}) {
    return (
      <SimpleItem
        textValues={[item.email]}
        onPress={() => changeScreen(item.id, item.email)}
      />
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={users => users.id}
      renderItem={renderItem}
      ItemSeparatorComponent={SimpleSeparator}
      ListEmptyComponent={
        <LoadingScreen searchData={searchData} title="Lista Vazia" />
      }
    />
  );
}
