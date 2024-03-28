import {
  AttendanceDescription,
  ListSeparator,
  Screen,
  SpecialtyDescription,
} from '@components';
import {ScheduleStackProps} from '@routes';
import {ClientBox} from './components/ClientBox';

export function ScheduleProfilesScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleProfilesScreen'>>) {
  return (
    <Screen scrollable>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <AttendanceDescription
        day={route.params.day}
        employee={route.params.employee}
        time={route.params.time}
      />
      <ListSeparator mb="s12" />
      <ClientBox navigation={navigation} route={route} />
    </Screen>
  );
}
