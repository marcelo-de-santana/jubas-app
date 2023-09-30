import {
  ButtonOpacity,
  EmptyListComponent,
  Icon,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {EmployeeResponseDTO, ProfileResponseDTO, getAllEmployees, getAllProfilesByUserPermissionId} from '@repositories';
import {EmployeeScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const [profiles, setProfiles] = useState<ProfileResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        data={profiles}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={EmptyListComponent({
          title: 'Nenhum funcionário listado',
        })}
      />
    </Screen>
  );
}
