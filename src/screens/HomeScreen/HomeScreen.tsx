import {Screen} from '@components';
import {AppStackProps} from '@routes';
import {Menu} from '@components';

export function HomeScreen({navigation}: AppStackProps) {
  const menuOptions = [
    {
      title: 'Ver agenda',
      route: () => navigation.navigate('UnderConstruction'),
    },
    {
      title: 'Minha conta',
      route: () => navigation.navigate('UnderConstruction'),
    },
    {
      title: 'Gerenciar agenda',
      route: () => navigation.navigate('UnderConstruction'),
    },
    {
      title: 'Gerenciar negócio',
      route: () => navigation.navigate('BusinessManagementStack'),
    },
    {
      title: 'Meus funcionários',
      route: () => navigation.navigate('EmployeeStack'),
    },
    {
      title: 'Gerenciar usuários',
      route: () => navigation.navigate('UserStack'),
    },
    {
      title: 'Gerenciar pagamentos',
      route: () => navigation.navigate('UnderConstruction'),
    },
    {
      title: 'Minhas compras',
      route: () => navigation.navigate('UnderConstruction'),
    },
  ];

  return (
    <Screen>
      <Menu menuOptions={menuOptions} />
    </Screen>
  );
}
