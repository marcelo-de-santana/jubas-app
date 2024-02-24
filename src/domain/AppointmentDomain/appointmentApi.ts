import {api} from '@services';
import {AppointmentGetAllRequest} from './appointmentRequest';
import {AppointmentCreateResponse} from './appointmentResponse';

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

async function create({
  date,
  time,
  employeeId,
  clientId,
  specialtyId,
}: AppointmentCreateResponse) {
  return await api.post(PATH, {
    dateTime: date + time,
    employeeId,
    clientId,
    specialtyId,
  });
}

export const appointmentApi = {
  getAll,
  create,
};
