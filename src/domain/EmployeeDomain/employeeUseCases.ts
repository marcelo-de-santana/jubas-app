import {useFetch} from '@hooks';
import {EmployeeResponse} from './employeeResponse';
import {
  EmployeeCreateRequest,
  EmployeeSpecialtiesRequest,
  EmployeeWorkingHourRequest,
} from './employeeRequest';
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
  return useFetch<EmployeeResponse, EmployeeCreateRequest>(employeeApi.create);
}
function addSpecialties() {
  return useFetch<EmployeeResponse, EmployeeSpecialtiesRequest>(
    employeeApi.addSpecialties,
  );
}
function updateWorkingHour() {
  return useFetch<EmployeeResponse, EmployeeWorkingHourRequest>(
    employeeApi.updateWorkingHour,
  );
}

export const employeeUseCases = {
  getAll,
  getById,
  getAppointments,
  create,
  addSpecialties,
  updateWorkingHour,
};
