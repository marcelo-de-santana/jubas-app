import {BoxMenu, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function DashboardScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'DashboardScreen'>>) {
  return (
    <Screen p="s10" scrollable>
      <BoxMenu
        title="Gerenciar Agenda"
        onPress={() => navigation.navigate('AppointmentHomeScreen')}
      />
      <BoxMenu
        title="Gerenciar Horários"
        onPress={() => navigation.navigate('WorkingHoursListScreen')}
      />
      <BoxMenu
        title="Gerenciar Serviços"
        onPress={() => navigation.navigate('SpecialtyListScreen')}
      />
      <BoxMenu
        title="Gerenciar Categorias"
        onPress={() => navigation.navigate('CategoryListScreen')}
      />
    </Screen>
  );
}
