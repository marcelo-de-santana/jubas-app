import {BoxMenu, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function DashboardScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'DashboardScreen'>>) {
  return (
    <Screen paddingHorizontal="s10" scrollable>
      <BoxMenu
        title="Gerenciar Agenda"
        onPress={() => navigation.navigate('AppointmentListScreen')}
      />
      <BoxMenu
        title="Gerenciar Funcionários"
        onPress={() => navigation.navigate('EmployeeListScreen')}
      />
      <BoxMenu
        title="Gerenciar Horários"
        onPress={() => navigation.navigate('WorkingHourListScreen')}
      />
      <BoxMenu
        title="Gerenciar Serviços"
        onPress={() => navigation.navigate('CategoryListScreen')}
      />
    </Screen>
  );
}
