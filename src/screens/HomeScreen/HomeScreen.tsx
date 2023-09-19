import {Screen} from '@components';
import {AppStackProps} from '@routes';
import {Menu} from '@components';

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
      routeName: 'EmployeeList',
    },
    {
      title: 'Gerenciar usuários',
      routeName: 'UserStack',
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
