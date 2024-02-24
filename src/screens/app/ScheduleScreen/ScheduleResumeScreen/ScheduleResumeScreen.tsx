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
import {appointmentUseCases} from '@domain';

export function ScheduleResumeScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleResumeScreen'>>) {
  const {data, fetch, isError, isLoading} = appointmentUseCases.create();

  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator variant="first" />
      <AttendanceDescription
        employee={route.params.employee}
        hour={route.params.hour}
      />
      <ListSeparator variant="first" />
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
