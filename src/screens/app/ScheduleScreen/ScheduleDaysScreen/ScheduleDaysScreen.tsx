import {ListSeparator, Screen, SpecialtyDescription} from '@components';
import {ScheduleStackProps} from '@routes';
import {BoxDaysOfWeek} from './components/BoxDaysOfWeek';
export function ScheduleDaysScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleDaysScreen'>>) {
  const navigateToEmployeesScreen = (day: string) => {
    navigation.navigate('ScheduleEmployeesScreen', {...route.params, day});
  };

  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <BoxDaysOfWeek navigate={navigateToEmployeesScreen} />
    </Screen>
  );
}
