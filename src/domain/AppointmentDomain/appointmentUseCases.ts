import {useFetch} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {AppointmentGetAllRequest} from './appointmentRequest';
import {AppointmentResponse, DayOfWeekResponse} from './appointmentResponse';
import {useMutation} from '@tanstack/react-query';

function getAll() {
  return useFetch<AppointmentResponse[], AppointmentGetAllRequest>(
    appointmentApi.getAll,
  );
}

function getDaysOfAttendance() {
  return useFetch<DayOfWeekResponse[]>(appointmentApi.getDaysOfAttendance);
}

export function useAppointmentCreate() {
  return useMutation({mutationFn: appointmentApi.create});
}

export const appointmentUseCases = {
  getAll,
  getDaysOfAttendance,
};
