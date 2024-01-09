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
  useEmployeeUpdate,
  useWorkingHoursList,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {flatListStyle} from '@styles';
import {useNavigation} from '@utils';

export function EmployeeTimeListScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeTimeListScreen'>) {
  const {employeeId, workingHourId} = route.params;
  const {navigateBack} = useNavigation();
  const useWorkingHous = useWorkingHoursList();
  const useEmployee = useEmployeeUpdate();

  useEffect(() => {
    navigation.addListener('focus', () => {
      useWorkingHous.getList();
    });
  }, [navigation]);

  const choiceWorkingHours = (workingHourId: number) => {
    useEmployee.update({
      employeeId,
      profileId: null,
      workingHourId,
    });
  };

  function renderItem({item}: ListRenderItemInfo<WorkingHoursResponse>) {
    return (
      <WorkingHoursLine
        item={item}
        workingHourId={workingHourId}
        onPress={choiceWorkingHours}
      />
    );
  }

  return (
    <Screen>
      <StatusScreen status={useEmployee.status} successAction={navigateBack} />
      <FlatList
        data={useWorkingHous.data}
        contentContainerStyle={flatListStyle(useWorkingHous.data)}
        ListHeaderComponent={WorkingHoursHeader}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        ListEmptyComponent={
          <EmptyList
            loading={useWorkingHous.isLoading}
            error={useWorkingHous.isError}
            title="Nenhum horário cadastrado."
            refetch={useWorkingHous.fetchData}
          />
        }
      />
    </Screen>
  );
}
