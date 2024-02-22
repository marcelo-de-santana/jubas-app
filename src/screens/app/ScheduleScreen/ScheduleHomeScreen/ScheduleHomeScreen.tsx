import {Box, BoxMenu, Screen, Text} from '@components';
import {ScheduleStackProps} from '@routes';

export function ScheduleHomeScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleHomeScreen'>>) {
  const navigateToListScreen = () => {
    navigation.navigate('ScheduleListScreen');
  };

  const navigateToSpecialtiesScreen = () => {
    navigation.navigate('ScheduleSpecialtiesScreen');
  };

  return (
    <Screen scrollable>
      <Box py="s20">
        <Text fontSize="XL">O que você prefere?</Text>
      </Box>

      <BoxMenu
        height={200}
        title="Agendar por barbeiro"
        onPress={navigateToListScreen}
      />

      <BoxMenu
        height={200}
        marginVertical="s20"
        title="Agendar por serviço"
        onPress={navigateToSpecialtiesScreen}
      />
    </Screen>
  );
}
