import {useFetch} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {
  AppointmentCreateRequest,
  AppointmentGetAllRequest,
} from './appointmentRequest';
import {AppointmentResponse} from './appointmentResponse';

function getAll() {
  return useFetch<AppointmentResponse[], AppointmentGetAllRequest>(
    appointmentApi.getAll,
  );
}

function create() {
  return useFetch<void, AppointmentCreateRequest>(appointmentApi.create);
}

export const appointmentUseCases = {
  getAll,
  create,
};
