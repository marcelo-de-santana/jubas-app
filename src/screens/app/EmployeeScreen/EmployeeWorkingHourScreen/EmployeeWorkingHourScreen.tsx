import {
  BoxFourTimes,
  BoxHeaderWorkingHour,
  FlatList,
  Screen,
} from '@components';
import {WorkingHourResponse, workingHourUseCases} from '@domain';
import {EmployeeStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function EmployeeWorkingHourScreen({
  navigation,
  route,
}: Readonly<EmployeeStackProps<'EmployeeWorkingHourScreen'>>) {
  const {data, fetch, isLoading, isError} = workingHourUseCases.getAll();

  useEffect(() => {
    fetch();
  }, []);

  function renderItem({item}: ListRenderItemInfo<WorkingHourResponse>) {
    const {id, startTime, startInterval, endInterval, endTime} = item;
    const selectedTime = route.params?.workingHourId === id;

    return (
      <BoxFourTimes
        height={50}
        disabled={selectedTime}
        textProps={{color: selectedTime ? 'secondaryContrast' : 'secondary'}}
        textValues={[startTime, startInterval, endInterval, endTime]}
        onPress={() => console.warn('Modal')}
      />
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        loading={isLoading}
        error={isError}
        ListHeaderComponent={data && BoxHeaderWorkingHour}
        listEmptyTitle="Não foi possível lista."
      />
    </Screen>
  );
}
