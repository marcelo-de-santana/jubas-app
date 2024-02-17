import {api} from '@services';
import {EmployeeCreateRequest, EmployeeUpdateRequest} from './employeeRequest';

const PATH = '/employees';

async function create(request: EmployeeCreateRequest) {
  return await api.post(PATH, request);
}

async function getById(employeeId: string) {
  return await api.get(`${PATH}/${employeeId}`);
}

async function update(request: EmployeeUpdateRequest) {
  return await api.patch(`${PATH}/${request.employeeId}`, {
    workingHourId: request.workingHourId,
  });
}
export const employeeApi = {
  create,
  getById,
  update,
};
