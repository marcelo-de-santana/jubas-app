import {DefaultErroAlert, SuccessAlert} from '@components';
import {api} from '@services';
import {ProfileRequestDTO} from './ProfileRepoTypes';
import {removeCpfMask} from '@utils';

const PATH = '/profile';

export async function getAllProfilesByUserId(userId: string) {
  try {
    const response = await api.get(`${PATH}/user/${userId}`);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function updateProfile(profile: ProfileRequestDTO) {
  try {
    const request = {...profile, cpf: removeCpfMask(String(profile.cpf))};
    const response = await api.put(PATH, request);
    SuccessAlert(`Perfil: ${response.data.name} atualizado com sucesso.`);
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function createProfile(profile: ProfileRequestDTO) {
  try {
    const response = await api.post(PATH, profile);
    SuccessAlert(`Perfil: ${response.data.name} criado com sucesso.`);
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function deleteProfile(userId: string) {
  try {
    const response = await api.delete(`${PATH}/${userId}`);
    SuccessAlert(`Perfil: ${response.data.name} excluído com sucesso.`);
  } catch (error) {
    DefaultErroAlert();
  }
}

export async function getAllProfilesByUserPermissionId(
  userPermissionId: number,
) {
  try {
    const response = await api.get(
      `${PATH}/user/permission/${userPermissionId}`,
    );
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}
