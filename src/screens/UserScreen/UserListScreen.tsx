import {
  EmptyListComponent,
  LoadingScreen,
  Screen,
  ViewSeparator,
  TouchableItem,
  ButtonComponent,
  Button,
  Text,
} from '@components';
import {useCallback, useState} from 'react';

import {UserScreenProps} from '@routes';
import {UserResponseDTO, getAllUsersByPermission} from '@domain';
import {FlatList, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {themeRegistry} from '@styles';

export function UserListScreen({navigation}: UserScreenProps) {
  const [userPermissionId, setUserPermissionId] = useState(3);

  const [users, setUsers] = useState<UserResponseDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function changeMenuButton(indexButton: number) {
    setUserPermissionId(indexButton);
  }

  interface ButtonTabProps {
    index: boolean;
    text: string;
    onPress: () => void;
  }

  function ButtonTab({index, text, onPress}: ButtonTabProps) {
    if (index) {
      return (
        <Button type="menu-tab-steel-blue" color="steel-blue" disabled>
          <Text color="white">{text}</Text>
        </Button>
      );
    }
    return (
      <Button
        type="menu-tab-lavender-gray"
        color="light-gray"
        onPress={onPress}>
        <Text color='steel-blue'>{text}</Text>
      </Button>
    );
  }

  function MenuTab() {
    return (
      <View style={themeRegistry['box-flex-row']}>
        <ButtonTab
          index={userPermissionId === 1}
          text="Admin"
          onPress={() => changeMenuButton(1)}
        />
        <ButtonTab
          index={userPermissionId === 2}
          text="Barbeiros"
          onPress={() => changeMenuButton(2)}
        />
        <ButtonTab
          index={userPermissionId === 3}
          text="Clientes"
          onPress={() => changeMenuButton(3)}
        />
      </View>
    );
  }

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
    return <MenuTab />;
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
