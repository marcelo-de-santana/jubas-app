import {AlertComponent} from '@components';
import {api} from '@services';
import {MinimalProfileRequestDTO, ProfileRequestDTO} from './ProfileRepoTypes';

const PATH = '/profile';

export async function getAllProfilesByUserId(userId: string) {
  try {
    const response = await api.get(`${PATH}/user/${userId}`);
    return response.data;
  } catch (error) {
    AlertComponent({});
  }
}

export async function updateUserAndProfile(profile: ProfileRequestDTO) {
  try {
    const response = await api.put(`${PATH}/user`, profile);
    AlertComponent({
      message: `Perfil: ${response.data.name} atualizado com sucesso.`,
    });
  } catch (error) {
    AlertComponent({});
  }
}

export async function createProfile(profile: ProfileRequestDTO) {
  try {
    const response = await api.post(PATH, profile);
    AlertComponent({
      message: `Perfil: ${response.data.name} criado com sucesso.`,
    });
  } catch (error) {
    AlertComponent({});
  }
}

export async function deleteProfile(userId: string) {
  try {
    const response = await api.delete(`${PATH}/${userId}`);
    AlertComponent({
      message: `Perfil: ${response.data.name} excluído com sucesso.`,
    });
  } catch (error) {
    AlertComponent({});
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
    AlertComponent({});
  }
}

export async function updateProfile(profile: MinimalProfileRequestDTO) {
  try {
    const response = await api.patch(`${PATH}/${profile.id}`, profile);
    AlertComponent({
      message: `Perfil: ${response.data.name} atualizado com sucesso.`,
    });
  } catch (error) {
    AlertComponent({});
  }
}
