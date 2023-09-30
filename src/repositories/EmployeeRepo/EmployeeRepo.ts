import {api} from '@services';
import {EmployeeRequestDTO} from './EmployeeRepoType';
import {AlertComponent} from '@components';
import {AxiosError} from 'axios';
import {MinimaProfilelResponseDTO} from '../ProfileRepo';

const PATH = '/employee';

export async function registerEmployee(profile: MinimaProfilelResponseDTO) {
  try {
    const response = await api.post(PATH, profile);
    AlertComponent({message: response.data});
  } catch (error) {
    AlertComponent({});
  }
}

export async function getEmployeeByProfileId(id: string) {
  try {
    const response = await api.get(`${PATH}/profile/${id}`);
    return response.data;
  } catch (error) {
    AlertComponent({});
  }
}

export async function getAllEmployees() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError)
      if (error.status === 404) {
        return false;
      }
    AlertComponent({});
  }
}

export async function updateEmployeeWorkingHour(
  employeeId: string,
  workingHourId: number,
) {
  try {
    await api.patch(`${PATH}/${employeeId}/working-hours`, {
      workingHours: {id: workingHourId},
    });
    AlertComponent({message: 'Horário atribuído.'});
  } catch (error) {
    AlertComponent({});
  }
}
