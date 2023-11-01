import {
  EmptyListComponent,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {
  ProfileResponseDTO,
  getAllProfilesByUserPermissionId,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, [navigation]);

  async function searchData() {
    setLoading(true);
    setProfiles(await getAllProfilesByUserPermissionId(2));
    setLoading(false);
  }

  function renderItem({item}: {item: ProfileResponseDTO}) {
    return (
      <TouchableItem
        type="box-items"
        textValues={[item.name]}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeDetailsScreen', {profile: {...item}})
        }
      />
    );
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
      <FlatList
        data={profiles}
        renderItem={renderItem}
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={EmptyListComponent({
          title: 'Nenhum funcionário listado',
        })}
      />
    </Screen>
  );
}
