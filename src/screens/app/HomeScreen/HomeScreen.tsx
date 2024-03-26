import {Box, BoxMenu, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';

export function HomeScreen({navigation}: Readonly<AppStackProps>) {
  const {user} = useAuthContext();

  const navigateToUnderConstruction = () => {
    navigation.navigate('UnderConstruction');
  };

  return (
    <Screen paddingHorizontal="s10" scrollable>
      <Box justifyContent="space-between">
        <BoxMenu
          title="Ver agenda"
          onPress={() => navigation.navigate('ScheduleStack')}
        />
        <BoxMenu title="Minhas compras" onPress={navigateToUnderConstruction} />
        <BoxMenu title="Minha conta" onPress={navigateToUnderConstruction} />

        {user?.permission === 'ADMIN' && (
          <BoxMenu
            title="Gerenciar negócio"
            onPress={() => navigation.navigate('BusinessManagementStack')}
          />
        )}
      </Box>
    </Screen>
  );
}
