import {
  BoxDaysOfWeek,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
} from '@components';
import {ScheduleStackProps} from '@routes';
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
      <BoxDaysOfWeek navigate={navigateToEmployeesScreen}>
        <Text variant="paragraphMedium" textAlign="justify" mb="s12">
          Selecione um dia
        </Text>
      </BoxDaysOfWeek>
    </Screen>
  );
}
