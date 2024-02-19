import {EmptyList, Screen, Separator, ModalStatus} from '@components';
import {
  WorkingHourResponse,
  employeeUseCases,
  workingHourUseCases,
} from '@domain';
import {useNavigation} from '@hooks';
import {EmployeeScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeCreateScreen({
  route,
}: Readonly<EmployeeScreenProps<'EmployeeCreateScreen'>>) {
  const $customStatus: AlertStatusType = {
    201: {type: 'success', message: 'Funcionário cadastrado com sucesso.'},
  };
  const {goBack} = useNavigation();
  const useWorkingHours = workingHourUseCases.getAll();
  const useEmployee = employeeUseCases.create();

  useEffect(() => {
    useWorkingHours.fetch();
  }, []);

  const registerEmployee = (workingHourId: number) => {
    useEmployee.fetch({
      profileId: route.params.profile.id,
      workingHourId: workingHourId,
    });
  };

  function renderItem({item}: ListRenderItemInfo<WorkingHourResponse>) {
    return <WorkingHoursLine item={item} onPress={registerEmployee} />;
  }

  return (
    <Screen>
      <ModalStatus
        status={useEmployee.status}
        customStatus={$customStatus}
        successAction={goBack}
      />
      <FlatList
        data={useWorkingHours.data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(useWorkingHours.data)}
        ListHeaderComponent={<WorkingHoursHeader />}
        ListEmptyComponent={
          <EmptyList
            loading={useWorkingHours.isLoading}
            error={useWorkingHours.isError}
            title="Lista Vazia."
            refetch={useWorkingHours.fetchData}
          />
        }
      />
    </Screen>
  );
}
