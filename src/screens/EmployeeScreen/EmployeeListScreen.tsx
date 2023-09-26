import {
  ButtonOpacity,
  EmptyListComponent,
  Icon,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {EmployeeResponseDTO, getAllEmployees} from '@repositories';
import {EmployeeScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeListScreen({navigation}: EmployeeScreenProps) {
  const [employees, setEmployees] = useState<EmployeeResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, [navigation]);

  async function searchData() {
    setLoading(true);
    setEmployees(await getAllEmployees());
    setLoading(false);
  }

  function renderItem({item}: {item: EmployeeResponseDTO}) {
    return (
      <TouchableItem
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textValues={[item.profile.name]}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeDetailsScreen', {employee: {...item}})
        }>
        <TouchableItem
          disabled
          type="box-flex-row-list"
          textValues={
            item.workingHours?.startTime
              ? [
                  `Entrada\n${item.workingHours.startTime}`,
                  `I. Intervalo\n${item.workingHours.startInterval}`,
                  `F. Intervalo\n${item.workingHours.endInterval}`,
                  `Saída\n${item.workingHours.endTime}`,
                ]
              : ['Não possui horários cadastrados.']
          }
        />
      </TouchableItem>
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
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={EmptyListComponent({
          title: 'Nenhum funcionário listado',
        })}
      />
      <ButtonOpacity
        type="square-right"
        onPress={() => navigation.navigate('EmployeeProfileCreateScreen')}>
        <Icon name="AddCircleIcon" color="white" size={40} />
      </ButtonOpacity>
    </Screen>
  );
}
