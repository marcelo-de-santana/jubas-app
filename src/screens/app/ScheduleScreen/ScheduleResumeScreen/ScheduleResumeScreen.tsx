import {
  AlertMessageType,
  AttendanceDescription,
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  ClientDescription,
  ListSeparator,
  ModalStatus,
  Screen,
  SpecialtyDescription,
} from '@components';
import {ScheduleStackProps} from '@routes';
import {useAppointmentCreate} from '@domain';

export function ScheduleResumeScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleResumeScreen'>>) {
  const {mutate, isError, isSuccess} = useAppointmentCreate();

  const registerNewAppointment = () => {
    const {day: date, time, employee, profile, specialty} = route.params;
    mutate({
      date,
      time,
      clientId: profile.id,
      employeeId: employee.id,
      specialtyId: specialty.id,
    });
  };

  const customMessage: AlertMessageType = {
    success: 'Agendamento realizado com sucesso.',
    error: 'O cliente já possui agendamento para o serviço.',
  };

  const navigateToHomeScreen = () => {
    navigation.popToTop();
    navigation.pop();
  };

  return (
    <Screen flex={1}>
      <ModalStatus
        customMessage={customMessage}
        isSuccess={isSuccess}
        isError={isError}
        errorAction={() => navigation.goBack()}
        successAction={() => navigateToHomeScreen()}
      />
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <AttendanceDescription
        day={route.params.day}
        employee={route.params.employee}
        time={route.params.time}
      />
      <ListSeparator mb="s12" />
      <ClientDescription name={route.params.profile.name} />

      <Box flexDirection="row" justifyContent="space-between" marginTop="s12">
        <ButtonDangerOutline
          mr="s4"
          onPress={() => navigation.goBack()}
          title="Voltar"
        />

        <ButtonSuccess
          ml="s4"
          title="Confirmar"
          onPress={registerNewAppointment}
        />
      </Box>
    </Screen>
  );
}
