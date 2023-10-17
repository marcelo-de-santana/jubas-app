import {Menu, Screen} from '@components';
import {BusinessManagementScreenProps} from '@routes';

export function DashboardScreen({navigation}: BusinessManagementScreenProps) {
  return (
    <Screen>
      <Menu
        menuOptions={[
          {
            title: 'Horários de Trabalho',
            route: () => navigation.navigate('WorkingHoursListScreen'),
          },
          {
            title: 'Categorias de Serviços',
            route: () => navigation.navigate('CategoryListScreen'),
          },
        ]}
      />
    </Screen>
  );
}
