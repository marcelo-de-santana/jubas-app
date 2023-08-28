import {api} from '@services';
import {BarberRequestDTO, BarberResponseDTO} from './EmployeeRepoType';
import {DefaultErroAlert} from '@components';
import {Alert} from 'react-native';

const PATH = 'employee/barber';

export async function createBarberRepo(barberData: BarberResponseDTO) {
  try {
    const response = await api.post(PATH, barberData);
    Alert.alert('', response.data);
  } catch (error) {
    DefaultErroAlert();
    return;
  }
}

export async function getAllEmployeesRepo() {
  try {
    const response = await api.get('/employee/barber');
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}
