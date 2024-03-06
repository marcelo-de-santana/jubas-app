import {Screen, BoxItem, FlatList} from '@components';
import {ProfileResponse, permissionUseCases} from '@domain';
import {BusinessManagementStackProps, EmployeeScreenProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function EmployeeListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} =
    permissionUseCases.getProfilesById();

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
        listEmptyTitle="Nenhum funcionário listado"
        loading={isLoading}
        error={isError}
        refetch={searchData}
      />
    </Screen>
  );
}
