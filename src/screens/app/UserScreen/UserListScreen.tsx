import {EmptyList, Screen, Separator, BoxItem, AddSteelBlue} from '@components';
import {UserResponse, usePermissionGetUsersByPermissionId} from '@domain';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import {flatListStyle} from '@styles';
import {UserStackProps} from '@routes';
import {useEffect} from 'react';

export function UserListScreen({
  navigation,
  route,
}: Readonly<UserStackProps<'UserListScreen'>>) {
  const {permission, fetchData, isLoading, isError, status} =
    usePermissionGetUsersByPermissionId();

  const searchData = () => {
    fetchData({permissionId: route.params.permission.id});
  };

  useEffect(() => {
    navigation.addListener('focus', searchData);
  }, [navigation]);

  const navigateToUserProfileScreen = (userId: string) => {
    navigation.navigate('UserProfileScreen', {
      userId,
    });
  };

  function renderItem({item}: ListRenderItemInfo<UserResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        onPress={() => navigateToUserProfileScreen(item.id)}
        label={item.email}
      />
    );
  }

  return (
    <Screen>
      <FlatList
        data={permission?.users}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(permission)}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={searchData} />
        }
        ListEmptyComponent={
          <EmptyList
            title="Nenhum usuário listado."
            loading={isLoading}
            error={isError}
            refetch={searchData}
          />
        }
      />
      {status === 200 && (
        <AddSteelBlue onPress={() => navigation.navigate('UserCreateScreen')} />
      )}
    </Screen>
  );
}
