import {api} from '@services';
import {
  UserToAuthenticatedRequestDTO,
  UserToCreateRequestDTO,
  UserToUpdateRequestDTO,
} from './UserTypes';
import {Alert} from '@components';
import {isAxiosError} from 'axios';

const PATH = '/user';

export async function getAllUsers() {
  const response = await api.get(PATH);
  return response.data;
}

export async function getAllUsersByPermission(id: number) {
  const respose = await api.get(`${PATH}/permission/${id}`);
  return respose.data;
}

export async function authUser(userToAuth: UserToAuthenticatedRequestDTO) {
  try {
    return await api.post(`${PATH}/login`, userToAuth);
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      Alert({type: 'alert', message: 'Usuário e/ou Senha Incorreto(s).'});
    }
  }
}

export async function createUser(userToCreate: UserToCreateRequestDTO) {
  try {
    const response = await api.post(`${PATH}/register`, userToCreate);
    if (response.status === 201) {
      Alert({
        type: 'alert',
        message: `Usuário "${response.data.email}" criado com sucesso.`,
      });
      return true;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      Alert({
        type: 'alert',
        message: 'Usuário já cadastrado.',
      });
    }
  }
}

export async function updateUser({
  userId,
  email,
  password,
  userPermissionId,
}: UserToUpdateRequestDTO) {
  const response = await api.patch(`${PATH}/${userId}`, {
    email,
    password,
    userPermissionId,
  });
  Alert({
    type: 'alert',
    message: `${response.data.email}  atualizado com sucesso!`,
  });
}
