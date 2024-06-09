import {
  ActivityIndicator,
  BoxDaysOfWeek,
  FlatList,
  Screen,
  Text,
} from '@components';
import {AppointmentStackProps} from '@routes';
import {ScheduleListItem} from './components/ScheduleListItem';
import {
  useScheduleGetAllByDate,
  useAppointmentGetDaysOfAttendance,
} from '@domain';
import {useEffect, useState} from 'react';
import {Calendar} from './components/Calendar';
import {mask} from '@utils';

export function AppointmentListScreen({
  navigation,
}: AppointmentStackProps<'AppointmentListScreen'>) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {data, refetch, isLoading, isError} = useScheduleGetAllByDate(
    mask.formatDate(selectedDate),
  );

  return (
    <Screen flex={1}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <FlatList
        data={data}
        loading={isLoading}
        error={isError}
        refetch={refetch}
        renderItem={prop => (
          <ScheduleListItem
            navigation={navigation}
            date={mask.formatDate(selectedDate)}
            {...prop}
          />
        )}
      />
    </Screen>
  );
}
