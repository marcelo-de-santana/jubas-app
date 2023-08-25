import {api} from '@services';
import {BarberRequestDTO, BarberResponseDTO} from '../repoTypes';
import {DefaultAlert} from '@components';
import {Alert} from 'react-native';

const PATH = 'employee/barber';

export async function createBarberRepo(barberData: BarberResponseDTO) {
  try {
    const response = await api.post(PATH, barberData);
    Alert.alert('', response.data);
  } catch (error) {
    DefaultAlert();
    return;
  }
}

export async function getAllEmployeesRepo(): Promise<
  [BarberRequestDTO] | []
> {
  try {
    const response = await api.get('/employee/barber');
    return response.data;
  } catch (error) {
    DefaultAlert();
    return [];
  }
}
