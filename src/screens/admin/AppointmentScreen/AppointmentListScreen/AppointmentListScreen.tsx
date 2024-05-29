import {ActivityIndicator, BoxDaysOfWeek, Screen, Text} from '@components';
import {AppointmentStackProps} from '@routes';
import {ScheduleListItem} from './components/ScheduleListItem';
import {
  useScheduleGetAllByDate,
  useAppointmentGetDaysOfAttendance,
} from '@domain';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Calendar} from './components/Calendar';
import {mask} from '@utils';

export function AppointmentListScreen({
  navigation,
}: AppointmentStackProps<'AppointmentListScreen'>) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {data} = useScheduleGetAllByDate(mask.formatDate(selectedDate));

  return (
    <Screen flex={1}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <FlatList
        data={data}
        renderItem={prop => (
          <ScheduleListItem
            navigation={navigation}
            // date={dayOfWeek}
            {...prop}
          />
        )}
        ListEmptyComponent={ActivityIndicator}
      />
    </Screen>
  );
}
