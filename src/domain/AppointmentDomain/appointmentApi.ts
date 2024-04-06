import {api} from '@api';
import {
  AppointmentCreateRequest,
  AppointmentGetAllRequest,
} from './appointmentRequest';

const PATH = '/appointments';

async function getAll({
  date,
  employeeId,
  specialtyId,
}: AppointmentGetAllRequest) {
  return await api.get(PATH, {
    params: {date, employeeId, specialtyId},
  });
}

async function getDaysOfAttendance() {
  return await api.get(PATH + '/days-of-attendance');
}

async function create({
  date,
  time,
  employeeId,
  clientId,
  specialtyId,
}: AppointmentCreateRequest) {
  return await api.post(PATH, {
    dateTime: date + ' ' + time,
    employeeId,
    clientId,
    specialtyId,
  });
}

export const appointmentApi = {
  getAll,
  getDaysOfAttendance,
  create,
};
