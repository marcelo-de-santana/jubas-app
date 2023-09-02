import {Screen} from '@components';
import {AppStackProps} from '@routes';
import {Menu} from './components/Menu';

export function HomeScreen({navigation}: AppStackProps) {
  const menuOptions = [
    {
      title: 'Ver agenda',
    },
    {
      title: 'Minha conta',
    },
    {
      title: 'Gerenciar agenda',
    },
    {
      title: 'Gerenciar catálogo',
    },
    {
      title: 'Gerenciar barbeiros',
      routeName: 'EmployeeScreen',
    },
    {
      title: 'Gerenciar usuários',
      routeName: 'UsersScreens',
    },
    {
      title: 'Gerenciar pagamentos',
    },
    {
      title: 'Minhas compras',
    },
  ];

  return (
    <Screen>
      <Menu menuOptions={menuOptions} navigate={navigation.navigate} />
    </Screen>
  );
}
