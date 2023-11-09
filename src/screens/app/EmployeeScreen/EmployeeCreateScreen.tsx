import {
  EmptyList,
  Screen,
  Separator,
  StatusScreen,
  WorkinhHoursHeader,
  WorkinhHoursLine,
} from '@components';
import {
  WorkingHoursResponse,
  useEmployeeCreate,
  useWorkingHoursList,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {AlertStatusType, flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeCreateScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeCreateScreen'>) {
  const $customStatus: AlertStatusType = {
    201: {type: 'success', message: 'Funcionário cadastrado com sucesso.'},
  };
  const useWorkingHours = useWorkingHoursList();
  const useEmployee = useEmployeeCreate();

  useEffect(() => {
    useWorkingHours.getList();
  }, []);

  function registerEmployee(workingHourId: number) {
    useEmployee.create({
      profileId: route.params.profile.id,
      workingHourId: workingHourId,
    });
  }

  function navigateToEmployeeDetailsScreen() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  function renderItem({item}: ListRenderItemInfo<WorkingHoursResponse>) {
    return <WorkinhHoursLine item={item} onPress={registerEmployee} />;
  }

  return (
    <Screen>
      <StatusScreen
        loading={useEmployee.isLoading}
        status={useEmployee.status}
        customStatus={$customStatus}
        successAction={navigateToEmployeeDetailsScreen}
      />
      <FlatList
        data={useWorkingHours.data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(useWorkingHours.data)}
        ListHeaderComponent={<WorkinhHoursHeader />}
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
