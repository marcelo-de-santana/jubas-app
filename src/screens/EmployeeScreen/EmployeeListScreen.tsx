import {
  EmptyListScreen,
  Icon,
  ListItem,
  LoadingScreen,
  Screen,
  SimpleSeparator,
} from '@components';
import {
  EmployeeResponseDTO,
  MinimaProfilelResponseDTO,
  getAllEmployees,
} from '@repositories';
import {EmployeeScreenProps} from '@routes';
import {text, theme} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const [employees, setEmployees] = useState<EmployeeResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    setLoading(true);
    setEmployees(await getAllEmployees());
    setLoading(false);
  }

  function renderItem({item}: {item: EmployeeResponseDTO}) {
    return (
      <ListItem
        onPress={() => navigation.navigate('EmployeeDetailsScreen', {employee: {...item}})}
        title={item.profile.name}
        textValues={
          item.operationTime?.startTime
            ? [
                `Entrada\n${item.operationTime.startTime}`,
                `I. Intervalo\n${item.operationTime.startInterval}`,
                `F. Intervalo\n${item.operationTime.endInterval}`,
                `Saída\n${item.operationTime.endTime}`,
              ]
            : ['Não possui horários cadastrados.']
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
        data={employees}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SimpleSeparator}
        ListEmptyComponent={EmptyListScreen({
          title: 'Nenhum funcionário listado',
        })}
      />
    </Screen>
  );
}
