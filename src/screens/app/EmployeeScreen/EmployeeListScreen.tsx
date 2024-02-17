import {EmptyList, Screen, Separator, BoxItem} from '@components';
import {ProfileResponse} from '@domain';
import {useApi} from '@hooks';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

export function EmployeeListScreen({
  navigation,
}: Readonly<EmployeeScreenProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} = useApi.permission.getProfilesById();

  const searchData = () => fetch(2);

  useEffect(() => {
    searchData();
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
        data={data?.profiles}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(data)}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={searchData} />
        }
        ListEmptyComponent={
          <EmptyList
            title="Nenhum funcionário listado"
            loading={isLoading}
            error={isError}
            refetch={searchData}
          />
        }
      />
    </Screen>
  );
}
