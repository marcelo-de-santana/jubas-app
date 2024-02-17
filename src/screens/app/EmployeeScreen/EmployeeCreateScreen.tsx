import {
  EmptyList,
  Screen,
  Separator,
  StatusScreen,
  WorkingHoursHeader,
  WorkingHoursLine,
} from '@components';
import {
  WorkingHoursResponse,
  useEmployeeCreate,
  useWorkingHoursList,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {AlertStatusType, flatListStyle} from '@styles';
import {useNavigation} from '@utils';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeCreateScreen({
  route,
}: Readonly<EmployeeScreenProps<'EmployeeCreateScreen'>>) {
  const $customStatus: AlertStatusType = {
    201: {type: 'success', message: 'Funcionário cadastrado com sucesso.'},
  };
  const {navigateBack} = useNavigation();
  const useWorkingHours = useWorkingHoursList();
  const useEmployee = useEmployeeCreate();

  useEffect(() => {
    useWorkingHours.getList();
  }, []);

  const registerEmployee = (workingHourId: number) => {
    useEmployee.create({
      profileId: route.params.profile.id,
      workingHourId: workingHourId,
    });
  };

  function renderItem({item}: ListRenderItemInfo<WorkingHoursResponse>) {
    return <WorkingHoursLine item={item} onPress={registerEmployee} />;
  }

  return (
    <Screen>
      <StatusScreen
        status={useEmployee.status}
        customStatus={$customStatus}
        successAction={navigateBack}
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
