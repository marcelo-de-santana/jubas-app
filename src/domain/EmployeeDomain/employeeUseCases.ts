import {useFetch} from '@hooks';
import {EmployeeResponse} from './employeeResponse';
import {EmployeeCreateRequest, EmployeeUpdateRequest} from './employeeRequest';
import {employeeApi} from './employeeApi';

function create() {
  return useFetch<EmployeeResponse, EmployeeCreateRequest>(employeeApi.create);
}

function getById() {
  return useFetch<EmployeeResponse, string>(employeeApi.getById);
}

function update() {
  return useFetch<EmployeeResponse, EmployeeUpdateRequest>(employeeApi.update);
}

export const employeeUseCases = {
  create,
  getById,
  update,
};
