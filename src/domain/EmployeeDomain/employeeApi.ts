import {api} from '@services';
import {
  EmployeeCreateRequest,
  EmployeeSpecialtiesRequest,
  EmployeeWorkingHourRequest,
} from './employeeRequest';

const PATH = '/employees';

async function getAll() {
  return await api.post(PATH);
}

async function getById(employeeId: string) {
  return await api.get(`${PATH}/${employeeId}`);
}

async function getAppointments(employeeId: string) {
  return await api.get(`${PATH}/${employeeId}/appointments`);
}

async function create(request: EmployeeCreateRequest) {
  return await api.post(PATH, request);
}

async function addSpecialties(request: EmployeeSpecialtiesRequest) {
  return await api.post(
    `${PATH}/${request.employeeId}/specialties`,
    request.specialties,
  );
}

async function updateWorkingHour(request: EmployeeWorkingHourRequest) {
  return await api.patch(`${PATH}/${request.employeeId}/working-hours`, {
    workingHourId: request.workingHourId,
  });
}
export const employeeApi = {
  getAll,
  getById,
  getAppointments,
  create,
  addSpecialties,
  updateWorkingHour,
};
