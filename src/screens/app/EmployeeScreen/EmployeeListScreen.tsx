import {EmptyList, Screen, Separator, BoxItem} from '@components';
import {ProfileResponse, useProfileListByPermission} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const {data, isLoading, isError, refetch} = useProfileListByPermission();

  useEffect(() => {
    navigation.addListener('focus', () => {
      refetch();
    });
  }, [navigation]);

  function natigateToEmployeeScreen(profile: ProfileResponse) {
    navigation.navigate('EmployeeDetailsScreen', {profile});
  }

  function renderItem({item}: ListRenderItemInfo<ProfileResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        label={item.name}
        onPress={() => natigateToEmployeeScreen(item)}
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
        ListEmptyComponent={
          <EmptyList
            title="Nenhum funcionário listado"
            loading={!isLoading}
            error={isError}
            refetch={refetch}
          />
        }
      />
    </Screen>
  );
}
