import {mask} from '@utils';
import {Text} from '../Text/Text';
import {AppointmentResponse} from '@domain';

export function AppointmentDescription({
  appointment,
}: {
  appointment: AppointmentResponse;
}) {
  return (
    <>
      <Text textAlign="justify">
        Data: {mask.date(new Date(appointment.scheduling.date))} às
        {appointment.scheduling.startTime}h
      </Text>
      <Text textAlign="justify">Cliente: {appointment.client.name}</Text>
      <Text textAlign="justify">Funcionário: {appointment.employee.name}</Text>
      <Text textAlign="justify">Serviço: {appointment.specialty.name}</Text>
      <Text textAlign="justify">Status: {appointment.status}</Text>
    </>
  );
}
