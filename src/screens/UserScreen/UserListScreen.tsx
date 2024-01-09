import {
  EmptyList,
  Screen,
  Separator,
  BoxItem,
  Icon,
  TabButton,
} from '@components';

import {UserResponse, useUserListByPermission} from '@domain';
import {FlatList, ListRenderItemInfo, RefreshControl, View} from 'react-native';
import {flatListStyle, themeRegistry} from '@styles';
import {UserStackProps} from '@routes';
import {useEffect, useState} from 'react';

export function UserListScreen({navigation}: UserStackProps<'UserListScreen'>) {
  const {data, fetchData, isLoading, isError, status} =
    useUserListByPermission();

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

  const changeScreen = (params: UserResponse) => {
    navigation.navigate('UserProfileScreen', {
      userId: params.id,
    });
  };

  function renderItem({item}: ListRenderItemInfo<UserResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        onPress={() => changeScreen({...item})}
        label={item.email}
      />
    );
  }

  function AddButton() {
    if (status == 200) {
      return (
        <Icon
          name="AddIcon"
          type="floating"
          backgroundColor="steelBlue"
          color="white"
          size={35}
          onPress={() => navigation.navigate('UserCreateScreen')}
        />
      );
    }
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={TabMenu}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(data)}
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
      <AddButton />
    </Screen>
  );
}
