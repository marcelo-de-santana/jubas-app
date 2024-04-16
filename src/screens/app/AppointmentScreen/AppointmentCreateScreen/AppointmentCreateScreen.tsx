import {
  AttendanceDescription,
  ButtonSuccess,
  ListSeparator,
  ModalStatus,
  Screen,
} from '@components';
import {
  ProfileResponse,
  SpecialtyResponse,
  useAppointmentCreate,
} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';
import {BoxSpecialty} from './components/BoxSpecialty';
import {BoxClient} from './components/BoxClient';

export function AppointmentCreateScreen({
  navigation,
  route,
}: BusinessManagementStackProps<'AppointmentCreateScreen'>) {
  const {date, employee, time} = route.params;

  const [specialty, setSpecialty] = useState<SpecialtyResponse>();

  const handleSpecialty = (specialty: SpecialtyResponse) => {
    setSpecialty(specialty);
  };

  const [client, setClient] = useState<ProfileResponse>();

  const handleClient = (client: ProfileResponse) => {
    setClient(client);
  };

  const {mutate, isPending, isError, isSuccess} = useAppointmentCreate();

  return (
    <Screen flex={1}>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={navigation.goBack}
      />
      <AttendanceDescription employee={employee} day={date} time={time} />
      <ListSeparator mb="s12" />

      <BoxSpecialty
        handleSpecialty={handleSpecialty}
        route={route}
        selectedSpecialty={specialty}
      />

      {specialty && (
        <BoxClient handleClient={handleClient} selectedClient={client} />
      )}

      {client && (
        <ButtonSuccess
          style={{position: 'absolute', bottom: 10, left: 20, right: 20}}
          bg="secondaryContrast"
          textProps={{variant: 'paragraphLarge', color: 'secondary'}}
          title="Confirmar"
          loading={isPending}
          onPress={() =>
            mutate({
              clientId: client.id,
              date,
              time,
              employeeId: employee.id,
              specialtyId: specialty?.id,
            })
          }
        />
      )}
    </Screen>
  );
}
