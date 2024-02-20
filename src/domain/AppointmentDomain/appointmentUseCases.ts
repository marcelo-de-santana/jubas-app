import {useFetch} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {ScheduleResponse} from './appointmentResponse';

function getAll() {
  return useFetch<ScheduleResponse[]>(appointmentApi.getAll);
}

export const appointmentUseCases = {
  getAll,
};
