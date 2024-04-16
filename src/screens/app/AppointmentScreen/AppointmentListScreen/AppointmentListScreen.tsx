import {ActivityIndicator, BoxDaysOfWeek, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {ScheduleListItem} from './components/ScheduleListItem';
import {useAppointmentGetAll, useAppointmentGetDaysOfAttendance} from '@domain';
import {useEffect} from 'react';
import {FlatList} from 'react-native';

export function AppointmentListScreen({
  navigation,
}: BusinessManagementStackProps<'AppointmentListScreen'>) {
  const {daysOfWeek, chooseDay, dayOfWeek} =
    useAppointmentGetDaysOfAttendance();

  const {data, mutate} = useAppointmentGetAll();

  useEffect(() => {
    if (dayOfWeek) {
      mutate({date: dayOfWeek});
    }
  }, [dayOfWeek]);

  
  return (
    <Screen flex={1}>
      <FlatList
        ListHeaderComponent={
          <BoxDaysOfWeek
            daysOfWeek={daysOfWeek}
            chooseDay={chooseDay}
            selectedDay={dayOfWeek}
          />
        }
        data={data}
        renderItem={prop => (
          <ScheduleListItem
            navigation={navigation}
            date={dayOfWeek}
            {...prop}
          />
        )}
        ListEmptyComponent={ActivityIndicator}
      />
    </Screen>
  );
}
