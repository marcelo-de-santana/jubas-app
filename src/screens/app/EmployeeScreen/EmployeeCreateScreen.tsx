import {
  EmptyList,
  Screen,
  Separator,
  WorkinhHoursHeader,
  WorkinhHoursLine,
} from '@components';
import {
  WorkingHoursResponse,
  useEmployeeCreate,
  useWorkingHoursList,
} from '@domain';
import {EmployeeCreateScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function EmployeeCreateScreen({
  navigation,
  route,
}: EmployeeCreateScreenProps) {
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

  if (useEmployee.status === 201) {
    navigation.goBack();
  }

  function renderItem({item}: ListRenderItemInfo<WorkingHoursResponse>) {
    return <WorkinhHoursLine item={item} onPress={registerEmployee} />;
  }

  return (
    <Screen>
      <FlatList
        data={useWorkingHours.data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={flatListStyle(useWorkingHours.data)}
        ListHeaderComponent={<WorkinhHoursHeader />}
        ListEmptyComponent={
          <EmptyList
            loading={!useWorkingHours.isLoading}
            error={useWorkingHours.isError}
            title="Lista Vazia."
            refetch={useWorkingHours.fetchData}
          />
        }
      />
    </Screen>
  );
}
