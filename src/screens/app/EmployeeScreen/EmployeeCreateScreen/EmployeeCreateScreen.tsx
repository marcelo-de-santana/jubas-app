import {
  EmptyList,
  Screen,
  Separator,
  ModalStatus,
  AlertStatusType,
  WorkingHourLine,
  WorkingHourHeader,
} from '@components';
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
    201: ['SUCCESS', 'Funcionário cadastrado com sucesso.'],
  };
  const {goBack} = useNavigation();
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
        successAction={goBack}
      />
      <FlatList
        data={useWorkingHours.data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(useWorkingHours.data)}
        ListHeaderComponent={<WorkingHourHeader />}
        ListEmptyComponent={
          <EmptyList
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
