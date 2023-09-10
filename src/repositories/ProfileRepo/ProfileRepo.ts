import {DefaultErroAlert, SuccessAlert} from '@components';
import {api} from '@services';
import {ProfileRequestDTO} from './ProfileRepoTypes';
import {removeCpfMask} from '@utils';

const PATH = '/profile';

export async function getAllProfilesByUserId(userId: string) {
  try {
    const response = await api.get(`${PATH}/${userId}`);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function updateProfile(profile: ProfileRequestDTO) {
  try {
    const request = {...profile, cpf: removeCpfMask(String(profile.cpf))};
    const response = await api.put(PATH, request);
    SuccessAlert(`Usuário: ${response.data.name} atualizado com sucesso!`);
  } catch (error) {
    DefaultErroAlert();
  }
}
