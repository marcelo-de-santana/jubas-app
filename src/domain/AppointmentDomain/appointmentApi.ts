import {api} from '@services';
import {AppointmentGetAllRequest} from './appointmentRequest';

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

export const appointmentApi = {
  getAll,
};
