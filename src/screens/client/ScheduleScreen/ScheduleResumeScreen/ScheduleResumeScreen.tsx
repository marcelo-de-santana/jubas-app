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
  route: {
    params: {day, employee, profile, specialty, time},
  },
}: ScheduleStackProps<'ScheduleResumeScreen'>) {
  const {mutate, isError, isSuccess, isPending} = useAppointmentCreate();

  const customMessage: AlertMessageType = {
    success: 'Agendamento realizado com sucesso.',
    error: 'O cliente já possui agendamento para o serviço.',
  };

  const navigateToHomeScreen = () => {
    navigation.popToTop();
    navigation.pop();
  };

  const registerNewAppointment = () => {
    mutate({
      date: day,
      time,
      clientId: profile.id,
      employeeId: employee.id,
      specialtyId: specialty.id,
    });
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
      <SpecialtyDescription specialty={specialty} />
      <ListSeparator mb="s12" />
      <AttendanceDescription day={day} employee={employee} time={time} />
      <ListSeparator mb="s12" />
      <ClientDescription name={profile.name} />

      <ButtonSuccess
        loading={isPending}
        style={{position: 'absolute', left: 20, bottom: 10, right: 20}}
        backgroundColor="secondaryContrast"
        textProps={{variant: 'paragraphLarge', color: 'secondary'}}
        title="Confirmar"
        onPress={registerNewAppointment}
      />
    </Screen>
  );
}
