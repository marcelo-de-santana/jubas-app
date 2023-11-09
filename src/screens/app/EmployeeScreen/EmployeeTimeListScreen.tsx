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

export function EmployeeTimeListScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeTimeListScreen'>) {
  const {employeeId, workingHourId} = route.params;
  const useWorkingHous = useWorkingHoursList();
  const useEmployee = useEmployeeUpdate();
  const loading = useEmployee.isLoading || useWorkingHous.isLoading;

  //EVENT MANAGER RESPONSE STATUS
  const status =
    useWorkingHous.status === 200
      ? useEmployee.status !== null
        ? useEmployee.status
        : useWorkingHous.status
      : useWorkingHous.status;

  useEffect(() => {
    navigation.addListener('focus', () => {
      useWorkingHous.getList();
    });
  }, [navigation]);

  function choiceWorkingHourk(workingHourId: number) {
    useEmployee.update({
      employeeId: employeeId ?? '',
      profileId: '',
      workingHourId,
    });
  }

  function verifySendUpdateRequestSuccessFull() {
    if (useEmployee.status === 200) {
      navigateToEmployeeDetailsScreen();
    }
  }

  function navigateToEmployeeDetailsScreen() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

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
      <StatusScreen
        loading={loading}
        status={status}
        successAction={verifySendUpdateRequestSuccessFull}
      />
      <FlatList
        data={useWorkingHous.data}
        contentContainerStyle={flatListStyle(useWorkingHous.data)}
        ListHeaderComponent={WorkinhHoursHeader}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyList title="Nenhum horário cadastrado." />}
      />
    </Screen>
  );
}
