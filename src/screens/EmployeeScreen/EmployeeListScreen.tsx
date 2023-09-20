import {
  ButtonIcon,
  ButtonIconOpacity,
  EmptyListScreen,
  Icon,
  ListItem,
  LoadingScreen,
  LoadingView,
  Screen,
  SimpleItem,
  SimpleSeparator,
} from '@components';
import {
  BarberResponseDTO,
  MinimaProfilelResponseDTO,
  getAllEmployeesRepo,
  getAllProfilesByUserPermissionId,
} from '@repositories';
import {EmployeeScreenProps} from '@routes';
import {text, theme} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const [employees, setEmployees] = useState<MinimaProfilelResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    setLoading(true);
    setEmployees(await getAllProfilesByUserPermissionId(2));
    setLoading(false);
  }

  function renderItem({item}: {item: MinimaProfilelResponseDTO}) {
    return (
      <TouchableOpacity
        style={[theme.boxItemsFlexRow]}
        onPress={() =>
          navigation.navigate('EmployeeTimeListScreen', {profile: {...item}})
        }>
        <Text style={text.blueText14}>{[item.name]}</Text>
        <Icon name="ChevronRightIcon" />
      </TouchableOpacity>
    );
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        data={employees}
        keyExtractor={employeeData => employeeData.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SimpleSeparator}
        ListEmptyComponent={EmptyListScreen({
          title: 'Nenhum funcionário listado',
        })}
      />
    </Screen>
  );
}
