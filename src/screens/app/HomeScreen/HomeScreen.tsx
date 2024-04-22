import {Box, BoxMenu, Screen} from '@components';
import {AppStackProps} from '@routes';
import {useAuthContext} from '@contexts';

export function HomeScreen({
  navigation: {navigate},
}: AppStackProps<'HomeScreen'>) {
  const {user} = useAuthContext();

  return (
    <Screen paddingHorizontal="s10" scrollable>
      <Box justifyContent="space-between">
        <BoxMenu title="Ver agenda" onPress={() => navigate('ScheduleStack')} />

        {user && (
          <>
            <BoxMenu
              title="Meus atendimentos"
              onPress={() => navigate('MyAttendancesScreen', {userId: user.id})}
            />

            <BoxMenu
              title="Minha conta"
              onPress={() => navigate('MyAccountScreen', {user})}
            />
          </>
        )}

        {user?.permission === 'ADMIN' && (
          <BoxMenu
            title="Gerenciar negócio"
            onPress={() => navigate('BusinessManagementStack')}
          />
        )}
      </Box>
    </Screen>
  );
}
