import {BoxMenu, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function DaysOfAttendanceScreen({
  navigation: {navigate},
}: BusinessManagementStackProps<'DaysOfAttendanceScreen'>) {
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
