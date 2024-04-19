import {
  AlertMessageType,
  AttendanceDescription,
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

      {/* <ButtonDangerOutline
          mr="s4"
          onPress={() => navigation.goBack()}
          title="Voltar"
        /> */}

      <ButtonSuccess
        style={{position: 'absolute', left: 20, bottom: 10, right: 20}}
        backgroundColor="secondaryContrast"
        textProps={{variant: 'paragraphLarge', color: 'secondary'}}
        title="Confirmar"
        onPress={registerNewAppointment}
      />
    </Screen>
  );
}
