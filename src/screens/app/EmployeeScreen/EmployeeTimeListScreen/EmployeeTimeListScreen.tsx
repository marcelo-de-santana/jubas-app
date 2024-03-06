import {
  Screen,
  ModalStatus,
  BoxHeaderWorkingHour,
  ListSeparator,
} from '@components';
import {
  WorkingHourResponse,
  employeeUseCases,
  workingHourUseCases,
} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {flatListStyle} from '@styles';

export function EmployeeTimeListScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'EmployeeTimeListScreen'>>) {
  const {employeeId, workingHourId} = route.params;
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
      <ModalStatus
        status={useEmployee.status}
        successAction={navigation.goBack}
      />
      <FlatList
        data={useWorkingHous.data}
        contentContainerStyle={flatListStyle(useWorkingHous.data)}
        ListHeaderComponent={BoxHeaderWorkingHour}
        ItemSeparatorComponent={ListSeparator}
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
