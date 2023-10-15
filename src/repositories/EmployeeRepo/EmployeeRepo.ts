import {api} from '@services';
import {Alert} from '@components';
import {EmployeeUpdateRequestDTO} from './EmployeeType';

const PATH = '/employee';

export async function registerEmployeeByProfileId(id: string) {
  const response = await api.post(PATH, {profileId: id});
  return response.data;
}

export async function getEmployeeByProfileId(id: string) {
  try {
    const response = await api.get(`${PATH}/profile/${id}`);
    return response.data;
  } catch (error) {
    Alert({
      type: 'decision',
      message: 'Funcionário ainda não cadastrado. Deseja inseri-lo agora?',
      onPress: () => registerEmployeeByProfileId(id),
    });
  }
}

export async function updateEmployee({
  employeeId,
  profileId,
  workingHoursId,
}: EmployeeUpdateRequestDTO) {
  await api.patch(`${PATH}/${employeeId}`, {
    profileId: profileId,
    workingHourId: workingHoursId,
  });
  Alert({message: 'Dados atualizados.'});
}
