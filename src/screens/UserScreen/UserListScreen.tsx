import {
  EmptyListComponent,
  LoadingScreen,
  MenuTab,
  Screen,
  ViewSeparator,
  TouchableItem,
  ButtonComponent,
} from '@components';
import {useCallback, useState} from 'react';

import {UserScreenProps} from '@routes';
import {UserResponseDTO, getAllUsersByPermission} from '@repositories';
import {FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export function UserListScreen({navigation}: UserScreenProps) {
  const [userPermissionId, setUserPermissionId] = useState(3);

  const [users, setUsers] = useState<UserResponseDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function changeMenuButton(indexButton: number) {
    setUserPermissionId(indexButton);
  }

  const menuOptions = [
    {
      index: 1,
      title: 'Admin',
      onPress: () => changeMenuButton(1),
    },
    {
      index: 2,
      title: 'Funcionários',
      onPress: () => changeMenuButton(2),
    },
    {
      index: 3,
      title: 'Clientes',
      onPress: () => changeMenuButton(3),
    },
  ];

  useFocusEffect(
    useCallback(() => {
      searchData();
    }, [userPermissionId]),
  );

  async function searchData() {
    setIsLoading(true);
    setUsers(await getAllUsersByPermission(userPermissionId));
    setIsLoading(false);
  }

  function changeScreen(params: UserResponseDTO) {
    navigation.navigate('UserProfileScreen', {
      user: params,
    });
  }

  function ListHeaderComponent() {
    return (
      <MenuTab
        menuOptions={menuOptions}
        indexButtonSelected={userPermissionId}
      />
    );
  }

  function renderItem({item}: {item: UserResponseDTO}) {
    return (
      <TouchableItem
        onPress={() => changeScreen({...item})}
        textValues={[item.email]}
      />
    );
  }

  return (
    <Screen>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={users}
          keyExtractor={users => users.id}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ItemSeparatorComponent={ViewSeparator}
          ListEmptyComponent={EmptyListComponent({
            title: 'Nenhum usuário listado.',
          })}
        />
      )}

      <ButtonComponent
        type="add"
        onPress={() => navigation.navigate('UserCreateScreen')}
      />
    </Screen>
  );
}
