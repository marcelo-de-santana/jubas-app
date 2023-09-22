import {api} from '@services';
import {EmployeeRequestDTO} from './EmployeeRepoType';
import {DefaultErroAlert, SuccessAlert} from '@components';

const PATH = '/employee';

export async function registerEmployee(employee: EmployeeRequestDTO) {
  try {
    const response = await api.post(PATH, employee);
    SuccessAlert(response.data);
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function getAllEmployees() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}
