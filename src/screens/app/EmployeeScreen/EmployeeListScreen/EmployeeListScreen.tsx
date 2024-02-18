import {EmptyList, Screen, Separator, BoxItem} from '@components';
import {ProfileResponse, permissionUseCases} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

export function EmployeeListScreen({
  navigation,
}: Readonly<EmployeeScreenProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} = permissionUseCases.getProfilesById();

  const searchData = () => fetch('BARBEIRO');

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ProfileResponse>) {
    const navigateToDetailsScreen = () => {
      navigation.navigate('EmployeeDetailsScreen', {profile: item});
    };

    return (
      <BoxItem
        style={{paddingVertical: 20}}
        label={item.name}
        onPress={navigateToDetailsScreen}
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
