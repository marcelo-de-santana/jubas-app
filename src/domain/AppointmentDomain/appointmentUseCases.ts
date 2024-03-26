import {useFetch} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {
  AppointmentCreateRequest,
  AppointmentGetAllRequest,
} from './appointmentRequest';
import {AppointmentResponse, DayOfWeekResponse} from './appointmentResponse';

function getAll() {
  return useFetch<AppointmentResponse[], AppointmentGetAllRequest>(
    appointmentApi.getAll,
  );
}

function getDaysOfAttendance() {
  return useFetch<DayOfWeekResponse[]>(appointmentApi.getDaysOfAttendance);
}

function create() {
  return useFetch<void, AppointmentCreateRequest>(appointmentApi.create);
}

export const appointmentUseCases = {
  getAll,
  getDaysOfAttendance,
  create,
};
