import {
  AlertStatusType,
  AttendanceDescription,
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  ListSeparator,
  ModalStatus,
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
  const {fetch, status} = appointmentUseCases.create();

  const registerNewAppointment = () => {
    const {day: date, time, employee, profile, specialty} = route.params;
    fetch({
      date,
      time,
      clientId: profile.id,
      employeeId: employee.id,
      specialtyId: specialty.id,
    });
  };

  const customStatus: AlertStatusType = {
    201: ['SUCCESS', 'Agendamento realizado com sucesso.'],
    409: ['DANGER', 'O cliente já possui agendamento para o serviço.'],
  };

  const navigateToHomeScreen = () => {
    navigation.popToTop();
    navigation.pop();
  };

  return (
    <Screen flex={1}>
      <ModalStatus
        customStatus={customStatus}
        status={status}
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
          onPress={registerNewAppointment}
        />
      </Box>
    </Screen>
  );
}
