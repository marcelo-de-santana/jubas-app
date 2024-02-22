import {Box, BoxMenu, Screen, Text} from '@components';
import {ScheduleStackProps} from '@routes';
import {ThemeColors} from '@styles';

type ButtonStyleProps = (condition: boolean) => {
  box: ThemeColors;
  text: ThemeColors;
};

export function ScheduleHomeScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleHomeScreen'>>) {
  const navigateToListScreen = () => {
    navigation.navigate('ScheduleListScreen');
  };
  return (
    <Screen scrollable>
      <Box py="s20">
        <Text fontSize="XL">O que você prefere?</Text>
      </Box>
      <BoxMenu height={200} marginVertical="s20" title="Agendar por serviço" />

      <BoxMenu
        height={200}
        title="Agendar por barbeiro"
        onPress={navigateToListScreen}
      />
    </Screen>
  );
}
