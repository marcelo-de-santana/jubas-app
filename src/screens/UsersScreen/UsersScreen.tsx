import {MenuTab, Screen} from '@components';
import {useState} from 'react';

import {AppStackProps} from '@routes';
import {UserList} from './components/UserList';
import {RegistrationForm} from './components/RegistrationForm';

export function UsersScreen({navigation}: AppStackProps) {
  const [indexButton, setIndexButton] = useState(3);

  function changeMenuButton(indexButton: number) {
    setIndexButton(indexButton);
  }

  const menuOptions = [
    {
      index: 1,
      title: 'Admin',
      onPress: () => changeMenuButton(1),
    },
    {
      index: 2,
      title: 'Barbeiros',
      onPress: () => changeMenuButton(2),
    },
    {
      index: 3,
      title: 'Clientes',
      onPress: () => changeMenuButton(3),
    },
  ];

  return (
    <Screen>
      <MenuTab menuOptions={menuOptions} indexButtonSelected={indexButton} />
      <UserList userPermissionId={indexButton} navigation={navigation} />
      <RegistrationForm />
    </Screen>
  );
}
