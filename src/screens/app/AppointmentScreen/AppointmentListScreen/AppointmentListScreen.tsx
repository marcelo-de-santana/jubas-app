import {ActivityIndicator, BoxDaysOfWeek, Screen} from '@components';
import {AppointmentStackProps} from '@routes';
import {ScheduleListItem} from './components/ScheduleListItem';
import {useScheduleGetAllByDate, useAppointmentGetDaysOfAttendance} from '@domain';
import {useEffect} from 'react';
import {FlatList} from 'react-native';

export function AppointmentListScreen({
  navigation,
}: AppointmentStackProps<'AppointmentListScreen'>) {
  const {daysOfWeek, chooseDay, dayOfWeek} =
    useAppointmentGetDaysOfAttendance();

  const {data, mutate} = useScheduleGetAllByDate();

  useEffect(() => {
    if (dayOfWeek) {
      mutate({date: dayOfWeek});
    }
  }, [dayOfWeek]);

  return (
    <Screen flex={1}>
      <BoxDaysOfWeek
        daysOfWeek={daysOfWeek}
        chooseDay={chooseDay}
        selectedDay={dayOfWeek}
      />
      <FlatList
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
