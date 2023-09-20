import {
  ButtonIcon,
  EmptyListScreen,
  Icon,
  LoadingScreen,
  MenuTab,
  Screen,
  SimpleItem,
  SimpleSeparator,
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
      <SimpleItem
        textValues={[item.email]}
        onPress={() => changeScreen({...item})}
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        data={users}
        keyExtractor={users => users.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={SimpleSeparator}
        ListEmptyComponent={EmptyListScreen({title: 'Nenhum usuário listado.'})}
      />

      <ButtonIcon
        color="#3C4659"
        onPress={() => navigation.navigate('UserCreateScreen')}>
        <Icon name="AddCircleIcon" color="#F2F2F2" size={40} />
      </ButtonIcon>
    </Screen>
  );
}
