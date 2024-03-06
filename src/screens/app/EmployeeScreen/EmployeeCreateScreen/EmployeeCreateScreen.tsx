import {
  Screen,
  ModalStatus,
  AlertStatusType,
  WorkingHourLine,
  WorkingHourHeader,
  ListSeparator,
  ListEmpty,
} from '@components';
import {
  WorkingHourResponse,
  employeeUseCases,
  workingHourUseCases,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeCreateScreen({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeCreateScreen'>>) {
  const $customStatus: AlertStatusType = {
    201: ['SUCCESS', 'Funcionário cadastrado com sucesso.'],
  };
  const useWorkingHours = workingHourUseCases.getAll();
  const useEmployee = employeeUseCases.create();

  useEffect(() => {
    useWorkingHours.fetch();
  }, []);

  function renderItem({item}: ListRenderItemInfo<WorkingHourResponse>) {
    const registerEmployee = () => {
      useEmployee.fetch({
        profileId: route.params.profile.id,
        workingHourId: item.id,
      });
    };

    return <WorkingHourLine item={item} onPress={registerEmployee} />;
  }

  return (
    <Screen>
      <ModalStatus
        status={useEmployee.status}
        customStatus={$customStatus}
        successAction={navigation.goBack}
      />
      <FlatList
        data={useWorkingHours.data}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={flatListStyle(useWorkingHours.data)}
        ListHeaderComponent={<WorkingHourHeader />}
        ListEmptyComponent={
          <ListEmpty
            loading={useWorkingHours.isLoading}
            error={useWorkingHours.isError}
            title="Lista Vazia."
            refetch={useWorkingHours.fetch}
          />
        }
      />
    </Screen>
  );
}
