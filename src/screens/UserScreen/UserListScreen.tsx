import {
  EmptyList,
  Screen,
  Separator,
  BoxItem,
  Icon,
  TabButton,
  AddSteelBlue,
} from '@components';

import {UserResponse, usePermissionGetUsersByPermissionId} from '@domain';
import {FlatList, ListRenderItemInfo, RefreshControl, View} from 'react-native';
import {flatListStyle, themeRegistry} from '@styles';
import {UserStackProps} from '@routes';
import {useEffect, useState} from 'react';

export function UserListScreen({navigation}: UserStackProps<'UserListScreen'>) {
  const {permission, fetchData, isLoading, isError, status} =
    usePermissionGetUsersByPermissionId();

  const [permissionId, setPermissionId] = useState(3);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData({permissionId});
    });
  }, [navigation]);

  const changeMenuButton = (pressedButton: number) => {
    setPermissionId(pressedButton);
    fetchData({permissionId: pressedButton});
  };

  function TabMenu() {
    return (
      <View style={[themeRegistry['boxFlexRow'], {marginBottom: 10}]}>
        <TabButton
          isPressed={permissionId === 1}
          title="Admin"
          onPress={() => changeMenuButton(1)}
        />
        <TabButton
          isPressed={permissionId === 2}
          title="Barbeiros"
          onPress={() => changeMenuButton(2)}
        />
        <TabButton
          isPressed={permissionId === 3}
          title="Clientes"
          onPress={() => changeMenuButton(3)}
        />
      </View>
    );
  }

  const navigateToUserProfileScreen = (params: UserResponse) => {
    navigation.navigate('UserProfileScreen', {
      userId: params.id,
    });
  };

  function renderItem({item}: ListRenderItemInfo<UserResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        onPress={() => navigateToUserProfileScreen(item)}
        label={item.email}
      />
    );
  }

  return (
    <Screen>
      <FlatList
        data={permission?.users}
        renderItem={renderItem}
        ListHeaderComponent={TabMenu}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(permission)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => fetchData({permissionId})}
          />
        }
        ListEmptyComponent={
          <EmptyList
            title="Nenhum usuário listado."
            loading={isLoading}
            error={isError}
            refetch={() => fetchData({permissionId})}
          />
        }
      />
      {status === 200 && (
        <AddSteelBlue onPress={() => navigation.navigate('UserCreateScreen')} />
      )}
    </Screen>
  );
}
