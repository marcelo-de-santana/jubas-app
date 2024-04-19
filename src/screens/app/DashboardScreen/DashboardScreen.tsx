import {BoxMenu, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function DashboardScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'DashboardScreen'>>) {
  return (
    <Screen paddingHorizontal="s10" scrollable>
      <BoxMenu
        title="Gerenciar Agenda"
        onPress={() => navigation.navigate('AppointmentStack')}
      />
      <BoxMenu
        title="Dias de atendimento"
        onPress={() => navigation.navigate('DaysOfAttendanceScreen')}
      />
      <BoxMenu
        title="Gerenciar Usuários"
        onPress={() => navigation.navigate('UserStack')}
      />
      <BoxMenu
        title="Gerenciar Funcionários"
        onPress={() => navigation.navigate('EmployeeStack')}
      />
      <BoxMenu
        title="Gerenciar Horários"
        onPress={() => navigation.navigate('WorkingHourStack')}
      />
      <BoxMenu
        title="Gerenciar Catálogo"
        onPress={() => navigation.navigate('CatalogStack')}
      />
    </Screen>
  );
}
