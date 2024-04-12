import {
  BoxDaysOfWeek,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
} from '@components';
import {useAppointmentGetDaysOfAttendance} from '@domain';
import {ScheduleStackProps} from '@routes';
export function ScheduleDaysScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleDaysScreen'>>) {
  const navigateToEmployeesScreen = (day: string) => {
    navigation.navigate('ScheduleEmployeesScreen', {...route.params, day});
  };

  const {dayOfWeek, daysOfWeek} = useAppointmentGetDaysOfAttendance();

  return (
    <Screen>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        Selecione um dia
      </Text>
      <BoxDaysOfWeek
        daysOfWeek={daysOfWeek}
        selectedDay={dayOfWeek}
        chooseDay={navigateToEmployeesScreen}
      />
    </Screen>
  );
}
