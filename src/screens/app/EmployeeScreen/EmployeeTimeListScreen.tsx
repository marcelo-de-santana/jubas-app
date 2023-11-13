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

  const choiceWorkingHourk = (workingHourId: number) => {
    useEmployee.update({
      employeeId: employeeId ?? '',
      profileId: null,
      workingHourId,
    });
  };

  function renderItem({item}: ListRenderItemInfo<WorkingHoursResponse>) {
    return (
      <WorkinhHoursLine
        item={item}
        workingHourId={workingHourId}
        onPress={choiceWorkingHourk}
      />
    );
  }

  return (
    <Screen>
      <StatusScreen status={useEmployee.status} successAction={navigateBack} />
      <FlatList
        data={useWorkingHous.data}
        contentContainerStyle={flatListStyle(useWorkingHous.data)}
        ListHeaderComponent={WorkinhHoursHeader}
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
