import {
  AttendanceDescription,
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  ListSeparator,
  Screen,
  SpecialtyDescription,
} from '@components';
import {ScheduleStackProps} from '@routes';
import {ClientDescription} from './components/ClientDescription';

export function ScheduleResumeScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleResumeScreen'>>) {
  // TODO: finalizar agendamento e montar request de data

  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <AttendanceDescription
        day={route.params.day}
        employee={route.params.employee}
        time={route.params.time}
      />
      <ListSeparator mb="s12" />
      <ClientDescription route={route} />

      <Box flexDirection="row" justifyContent="space-between" marginTop="s12">
        <ButtonDangerOutline
          mr="s4"
          onPress={() => navigation.goBack()}
          title="Voltar"
        />

        <ButtonSuccess
          ml="s4"
          title="Confirmar"
          onPress={() => console.warn('Enviar')}
        />
      </Box>
    </Screen>
  );
}
