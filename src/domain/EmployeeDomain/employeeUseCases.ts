import {useFetch} from '@hooks';
import {EmployeeResponse} from './employeeResponse';
import {EmployeeCreateRequest, EmployeeUpdateRequest} from './employeeRequest';
import {employeeApi} from './employeeApi';

function getAll() {
  return useFetch<EmployeeResponse[]>(employeeApi.getAll);
}
function getById() {
  return useFetch<EmployeeResponse, string>(employeeApi.getById);
}
function getAppointments() {
  return useFetch<EmployeeResponse, string>(employeeApi.getAppointments);
}
function create() {
  return useFetch<void, EmployeeCreateRequest>(employeeApi.create);
}
function update() {
  return useFetch<void, EmployeeUpdateRequest>(employeeApi.update);
}

export const employeeUseCases = {
  getAll,
  getById,
  getAppointments,
  create,
  update,
};
