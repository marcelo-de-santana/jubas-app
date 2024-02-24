import {Box, BoxMenu, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';

export function HomeScreen({navigation}: Readonly<AppStackProps>) {
  const {user} = useAuthContext();

  const navigateToUnderConstruction = () => {
    navigation.navigate('UnderConstruction');
  };

  const navigateToScheduleStack = () => {
    navigation.navigate('ScheduleStack');
  };

  const navigateToBusinessManagementStack = () => {
    navigation.navigate('BusinessManagementStack');
  };

  const navigateToEmployeeStack = () => {
    navigation.navigate('EmployeeStack');
  };

  const navigateToUserStack = () => {
    navigation.navigate('UserStack');
  };

  return (
    <Screen paddingHorizontal="s10" scrollable>
      <Box justifyContent="space-between">
        <BoxMenu title="Ver agenda" onPress={navigateToScheduleStack} />
        <BoxMenu title="Minhas compras" onPress={navigateToUnderConstruction} />
        <BoxMenu title="Minha conta" onPress={navigateToUnderConstruction} />
        {user.permission !== 'ADMIN' && (
          <>
            <BoxMenu
              title="Gerenciar agenda"
              onPress={navigateToUnderConstruction}
            />
            <BoxMenu
              title={`Meus funcionários`}
              onPress={navigateToEmployeeStack}
            />
            <BoxMenu
              title="Gerenciar negócio"
              onPress={navigateToBusinessManagementStack}
            />
            <BoxMenu title="Gerenciar usuários" onPress={navigateToUserStack} />
            <BoxMenu
              title="Gerenciar pagamentos"
              onPress={navigateToUnderConstruction}
            />
          </>
        )}
      </Box>
    </Screen>
  );
}
