import {AlertComponent} from '@components';
import {api} from '@services';
import {WorkingHoursRequestDTO} from './WorkingHoursTypes';
import {isAxiosError} from 'axios';

const PATH = '/working-hours';

export async function getAllWorkingHours() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    AlertComponent({});
  }
}

export async function createNewWorkingHour(
  workingHour: WorkingHoursRequestDTO,
) {
  try {
    await api.post(PATH, workingHour);
    AlertComponent({message: 'Novo horário criado com sucesso.'});
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      AlertComponent({message: 'Horários já cadastrados.'});
    }
  }
}
