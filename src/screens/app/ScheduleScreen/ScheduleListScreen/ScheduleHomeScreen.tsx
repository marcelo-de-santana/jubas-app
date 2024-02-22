import {Box, BoxMenu, Button, ButtonConfirm, Screen, Text} from '@components';
import {ThemeColors} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';

type ButtonStyleProps = (condition: boolean) => {
  box: ThemeColors;
  text: ThemeColors;
};

export function ScheduleHomeScreen() {
  return (
    <Screen scrollable>
      <Box py="s20">
        <Text fontSize="XL">O que você prefere?</Text>
      </Box>
      <BoxMenu height={200} marginVertical="s20" title="Agendar por serviço" />

      <BoxMenu height={200} title="Agendar por barbeiro" />
    </Screen>
  );
}
