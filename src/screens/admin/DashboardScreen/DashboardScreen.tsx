import {BoxMenu, IconExit, Screen} from '@components';
import {AdminStackProps} from '@routes';
import {useLayoutEffect} from 'react';

export function DashboardScreen({
  navigation: {navigate, setOptions},
}: AdminStackProps<'DashboardScreen'>) {
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <IconExit />,
    });
  });

  return (
    <Screen paddingHorizontal="s10" scrollable>
      <BoxMenu
        title="Atendimentos"
        onPress={() => navigate('AppointmentStack')}
      />
      <BoxMenu
        title="Agenda"
        onPress={() => navigate('DaysOfAttendanceScreen')}
      />
      <BoxMenu title="Usuários" onPress={() => navigate('UserStack')} />
      <BoxMenu title="Funcionários" onPress={() => navigate('EmployeeStack')} />
      <BoxMenu title="Horários" onPress={() => navigate('WorkingHourStack')} />
      <BoxMenu title="Catálogo" onPress={() => navigate('CatalogStack')} />
      <BoxMenu title="Pagamentos" onPress={() => navigate('PaymentScreen')} />
    </Screen>
  );
}
