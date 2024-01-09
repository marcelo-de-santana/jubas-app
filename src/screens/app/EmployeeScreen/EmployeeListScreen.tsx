import {EmptyList, Screen, Separator, BoxItem} from '@components';
import {ProfileResponse, useProfileListByPermission} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

export function EmployeeListScreen({
  navigation,
}: EmployeeScreenProps<'EmployeeListScreen'>) {
  const {data, isLoading, isError, refetch, fetchData} =
    useProfileListByPermission();

  useEffect(() => {
    fetchData({permissionId: 2});
  }, []);

  const navigateToEmployeeDetailsScreen = (profile: ProfileResponse) => {
    navigation.navigate('EmployeeDetailsScreen', {profile});
  };

  function renderItem({item}: ListRenderItemInfo<ProfileResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        label={item.name}
        onPress={() => navigateToEmployeeDetailsScreen(item)}
      />
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(data)}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListEmptyComponent={
          <EmptyList
            title="Nenhum funcionário listado"
            loading={isLoading}
            error={isError}
            refetch={refetch}
          />
        }
      />
      
    </Screen>
  );
}
