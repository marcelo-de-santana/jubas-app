import {Alert} from '@components';
import {api} from '@services';
import {
  ProfileToCreateRequestDTO,
  ProfileToUpdateRequestDTO,
  ProfileToPartiallyUpdateRequestDTO,
} from './ProfileTypes';

const PATH = '/profile';

export async function getAllProfilesByUserPermissionId(
  userPermissionId: number,
) {
  const response = await api.get(`${PATH}/permission/${userPermissionId}`);
  return response.data;
}

export async function getAllProfilesByUserId(userId: string) {
  const response = await api.get(`${PATH}/user/${userId}`);
  return response.data;
}

export async function createProfile(profile: ProfileToCreateRequestDTO) {
  const response = await api.post(PATH, profile);
  Alert({
    type: 'alert',
    message: `Perfil: ${response.data.name} criado com sucesso.`,
  });
}

export async function updateProfileAndUser({
  profileId,
  name,
  cpf,
  statusProfile,
  userId,
}: ProfileToUpdateRequestDTO) {
  const response = await api.put(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
    userId,
  });
  Alert({
    type: 'alert',
    message: `Perfil: ${response.data.name} atualizado com sucesso.`,
  });
}

export async function updateProfile(
  profile: ProfileToPartiallyUpdateRequestDTO,
) {
  const response = await api.patch(`${PATH}/${profile.id}`, profile);
  Alert({
    type: 'alert',
    message: `Perfil: ${response.data.name} atualizado com sucesso.`,
  });
}

export async function deleteProfile(id: string) {
  const response = await api.delete(`${PATH}/${id}`);
  Alert({
    type: 'alert',
    message: `Perfil: ${response.data.name} excluído com sucesso.`,
  });
}
