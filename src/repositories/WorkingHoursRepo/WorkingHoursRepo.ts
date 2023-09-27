import {DefaultErroAlert, SuccessAlert} from '@components';
import {api} from '@services';
import {WorkingHoursRequestDTO} from './WorkingHoursTypes';

const PATH = '/working-hours';

export async function getAllWorkingHours() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function createNewWorkingHour(
  workingHour: WorkingHoursRequestDTO,
) {
  try {
    await api.post(PATH, workingHour);
    SuccessAlert({message: 'Novo horário criado com sucesso.'});
  } catch (error) {
    DefaultErroAlert();
  }
}
