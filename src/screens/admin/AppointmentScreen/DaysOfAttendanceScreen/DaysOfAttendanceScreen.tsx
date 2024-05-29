import {BoxMenu, Screen} from '@components';
import {AdminStackProps} from '@routes';

export function DaysOfAttendanceScreen({
  navigation: {navigate},
}: AdminStackProps<'DaysOfAttendanceScreen'>) {
  return (
    <Screen flex={1}>
      <BoxMenu
        title="Agenda semanal"
        onPress={() => navigate('WeeklyScheduleScreen')}
      />
      <BoxMenu
        title="Agenda do mês"
        onPress={() => navigate('MonthlyScheduleScreen')}
      />
    </Screen>
  );
}
