import {
  AttendanceDescription,
  Box,
  ClientDescription,
  ListEmpty,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
} from '@components';
import {AppointmentStatus, useAppointmentGetById} from '@domain';
import {AppointmentStackProps} from '@routes';
import {OptionsButton} from './components/OptionsButton';

export function AppointmentDescriptionScreen({
  navigation,
  route,
}: AppointmentStackProps<'AppointmentDescriptionScreen'>) {
  const buttonTitle: Record<AppointmentStatus, string> = {
    MARCADO: 'Marcado',
    CANCELADO: 'Cancelado',
    EM_ATENDIMENTO: 'Em atendimento',
    FINALIZADO: 'Finalizado',
    AVALIADO: 'Avaliado',
  };

  const {
    data: appointment,
    isError,
    isLoading,
  } = useAppointmentGetById(route.params.appointmentId);

  return (
    <Screen flex={1}>
      {isLoading || isError ? (
        <ListEmpty loading={isLoading} error={isError} />
      ) : (
        <>
          <SpecialtyDescription specialty={appointment?.specialty} />
          <ListSeparator mb="s12" />
          <AttendanceDescription
            day={appointment?.scheduling.date}
            time={appointment?.scheduling.startTime}
            employee={appointment?.employee}
          />
          <ListSeparator mb="s12" />

          <ClientDescription name={appointment?.client.name} />
          <ListSeparator mb="s12" />

          <Box>
            <Text variant="paragraphMedium" textAlign="justify">
              Status do atendimento
            </Text>
            <Box borderRadius="s6" padding="s12">
              <Text color="primaryContrast" textAlign="justify">
                {appointment && buttonTitle[appointment.status]}
              </Text>
            </Box>
          </Box>

          {appointment && (
            <OptionsButton
              appointmentStatus={appointment.status}
              appointmentId={route.params.appointmentId}
              navigation={navigation}
            />
          )}
        </>
      )}
    </Screen>
  );
}
