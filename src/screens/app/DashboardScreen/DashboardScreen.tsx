import {BoxMenu, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function DashboardScreen({
  navigation,
}: BusinessManagementStackProps<'DashboardScreen'>) {
  return (
    <Screen paddingHorizontal="s10" scrollable>
      <BoxMenu
        title="Atendimentos"
        onPress={() => navigation.navigate('AppointmentStack')}
      />
      <BoxMenu
        title="Agenda"
        onPress={() => navigation.navigate('DaysOfAttendanceScreen')}
      />
      <BoxMenu
        title="Usuários"
        onPress={() => navigation.navigate('UserStack')}
      />
      <BoxMenu
        title="Funcionários"
        onPress={() => navigation.navigate('EmployeeStack')}
      />
      <BoxMenu
        title="Horários"
        onPress={() => navigation.navigate('WorkingHourStack')}
      />
      <BoxMenu
        title="Catálogo"
        onPress={() => navigation.navigate('CatalogStack')}
      />
    </Screen>
  );
}
