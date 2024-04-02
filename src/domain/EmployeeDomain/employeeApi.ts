import {api} from '@api';
import {EmployeeCreateRequest, EmployeeUpdateRequest} from './employeeRequest';

const PATH = '/employees';

async function getAll() {
  return await api.get(PATH);
}

async function getById(employeeId: string) {
  return await api.get(PATH + '/' + employeeId);
}

async function getAppointments(employeeId: string) {
  return await api.get(PATH + '/' + employeeId + '/appointments');
}

async function create(request: EmployeeCreateRequest) {
  return await api.post(PATH, request);
}

async function update({
  employeeId,
  specialties,
  workingHourId,
}: EmployeeUpdateRequest) {
  return await api.patch(PATH + '/' + employeeId, {
    workingHourId,
    specialties,
  });
}

export const employeeApi = {
  getAll,
  getById,
  getAppointments,
  create,
  update,
};
