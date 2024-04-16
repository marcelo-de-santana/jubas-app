import {api} from '@services';
import {EmployeeCreateRequest, EmployeeUpdateRequest} from './employeeRequest';
import {EmployeeResponse} from './employeeResponse';
import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

const PATH = '/employees';

async function getAll(available: boolean): Promise<EmployeeResponse[]> {
  return (await api.get(PATH, {params: {available}})).data;
}

async function getById(employeeId: string) {
  return (await api.get(PATH + '/' + employeeId)).data;
}

async function getAppointments(employeeId: string) {
  return (await api.get(PATH + '/' + employeeId + '/appointments')).data;
}

async function getAvailableSpecialties(
  employeeId: string,
  date: string,
  time: string,
): Promise<SpecialtyResponse[]> {
  const response = await api.get(
    PATH + '/' + employeeId + '/available-specialties',
    {
      params: {dateTime: date + 'T' + time},
    },
  );

  return response.data;
}
async function create(request: EmployeeCreateRequest): Promise<void> {
  return (await api.post(PATH, request)).data;
}

async function update({
  employeeId,
  specialties,
  workingHourId,
}: EmployeeUpdateRequest): Promise<void> {
  return await api.patch(PATH + '/' + employeeId, {
    workingHourId,
    specialties,
  });
}

export const employeeApi = {
  getAll,
  getById,
  getAppointments,
  getAvailableSpecialties,
  create,
  update,
};
