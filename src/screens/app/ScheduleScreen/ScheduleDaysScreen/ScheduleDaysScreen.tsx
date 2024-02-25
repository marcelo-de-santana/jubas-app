import {
  Box,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
  TouchableOpacityItem,
} from '@components';
import {ScheduleStackProps} from '@routes';
export function ScheduleDaysScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleDaysScreen'>>) {
  const daysOfWeek = [
    {day: 'DOMINGO', isAvailable: false},
    {day: 'SEGUNDA', isAvailable: true},
    {day: 'TERÇA', isAvailable: true},
  ];

  const navigateToEmployeesScreen = (day: string) => {
    navigation.navigate('ScheduleEmployeesScreen', {...route.params, day});
  };

  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        Selecione um dia
      </Text>

      <Box flexDirection="row" justifyContent="space-between">
        {daysOfWeek.map(item => {
          const isAvailable = item.isAvailable;
          return (
            <TouchableOpacityItem
              key={item.day}
              bg="primaryContrast"
              opacity={!isAvailable ? 0.5 : 1}
              disabled={!isAvailable}
              padding="s10"
              width={100}
              borderRadius="s6"
              textProps={{color: 'primary'}}
              onPress={() => navigateToEmployeesScreen(item.day)}
              label={item.day}
            />
          );
        })}
      </Box>
    </Screen>
  );
}
