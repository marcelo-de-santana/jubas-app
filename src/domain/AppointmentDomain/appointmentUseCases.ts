import {useFetch} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {ScheduleResponse} from './appointmentResponse';
import {AppointmentGetAllRequest} from './appointmentRequest';

function getAll() {
  return useFetch<ScheduleResponse[], AppointmentGetAllRequest>(
    appointmentApi.getAll,
  );
}

export const appointmentUseCases = {
  getAll,
};
