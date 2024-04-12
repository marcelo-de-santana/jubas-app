import {BoxDaysOfWeek, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {Schedule} from './components/Schedule';
import {useAppointmentGetDaysOfAttendance} from '@domain';

export function AppointmentListScreen({
  navigation,
}: BusinessManagementStackProps<'AppointmentListScreen'>) {
  const {daysOfWeek, chooseDay, dayOfWeek} =
    useAppointmentGetDaysOfAttendance();

  return (
    <Screen>
      <BoxDaysOfWeek
        daysOfWeek={daysOfWeek}
        chooseDay={chooseDay}
        selectedDay={dayOfWeek}
      />
      <Schedule date={dayOfWeek} navigation={navigation} />
    </Screen>
  );
}
