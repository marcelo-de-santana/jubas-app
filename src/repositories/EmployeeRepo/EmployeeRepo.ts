import {api} from '@services';
import {BarberType} from '../repoTypes';

const PATH = 'employee/barber';

export async function createBarber(barberData: BarberType) {
  try {
    return await api.post(PATH, barberData);
  } catch (error) {
    throw error;
  }
}
