import {useFetch} from '@hooks';
import {EmployeeResponse} from './employeeResponse';
import {EmployeeUpdateRequest} from './employeeRequest';
import {employeeApi} from './employeeApi';
import {useMutation} from '@tanstack/react-query';

function getAll() {
  return useFetch<EmployeeResponse[]>(employeeApi.getAll);
}
function getById() {
  return useFetch<EmployeeResponse, string>(employeeApi.getById);
}
function getAppointments() {
  return useFetch<EmployeeResponse, string>(employeeApi.getAppointments);
}
export function useEmployeeCreate() {
  return useMutation({mutationFn: employeeApi.create});
}
function update() {
  return useFetch<void, EmployeeUpdateRequest>(employeeApi.update);
}

export const employeeUseCases = {
  getAll,
  getById,
  getAppointments,
  update,
};
