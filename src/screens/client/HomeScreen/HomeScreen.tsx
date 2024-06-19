import {Box, BoxMenu, Icon, IconExit, Screen} from '@components';
import {ClientStackProps} from '@routes';
import {useLayoutEffect} from 'react';
import {useAuthStore} from '@services';
import { Linking } from 'react-native';

export function HomeScreen({
  navigation: {navigate, setOptions},
}: ClientStackProps<'HomeScreen'>) {
  const {user} = useAuthStore();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <IconExit />,
    });
  });

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
            <BoxMenu
              title="Google"
              onPress={() => Linking.openURL('jubas://payment-success/123')}
            />
          </>
        )}
      </Box>
    </Screen>
  );
}
