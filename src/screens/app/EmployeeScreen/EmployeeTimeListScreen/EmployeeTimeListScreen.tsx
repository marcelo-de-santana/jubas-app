import {
  EmptyList,
  Screen,
  Separator,
  ModalStatus,
  WorkingHourLine,
  WorkingHourHeader,
} from '@components';
import {
  WorkingHourResponse,
  employeeUseCases,
  workingHourUseCases,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {flatListStyle} from '@styles';
import {useNavigation} from '@hooks';

export function EmployeeTimeListScreen({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeTimeListScreen'>>) {
  const {employeeId, workingHourId} = route.params;
  const {goBack} = useNavigation();
  const useWorkingHous = workingHourUseCases.getAll();
  const useEmployee = employeeUseCases.updateWorkingHour();

  useEffect(() => {
    navigation.addListener('focus', () => {
      useWorkingHous.fetch();
    });
  }, [navigation]);

  function renderItem({item}: ListRenderItemInfo<WorkingHourResponse>) {
    const choiceWorkingHours = () => {
      useEmployee.fetch({
        employeeId,
        workingHourId: item.id,
      });
    };

    return (
      <WorkingHourLine
        item={item}
        workingHourId={workingHourId}
        onPress={choiceWorkingHours}
      />
    );
  }

  return (
    <Screen>
      <ModalStatus status={useEmployee.status} successAction={goBack} />
      <FlatList
        data={useWorkingHous.data}
        contentContainerStyle={flatListStyle(useWorkingHous.data)}
        ListHeaderComponent={WorkingHourHeader}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        ListEmptyComponent={
          <EmptyList
            loading={useWorkingHous.isLoading}
            error={useWorkingHous.isError}
            title="Nenhum horário cadastrado."
            refetch={useWorkingHous.fetch}
          />
        }
      />
    </Screen>
  );
}
