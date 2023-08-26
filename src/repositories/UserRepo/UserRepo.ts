import {api} from '@services';
import {MinimalUserResponseDTO, UserType} from '../repoTypes';
import {DefaultAlert} from '@components';

const PATH = '';

export async function authUser(userData: UserType) {
  try {
    return await api.post('login', userData);
  } catch (error) {
    throw error;
  }
}

export async function createUserClient(userData: UserType) {
  const {email, password} = userData,
    user = {
      email,
      password,
      userPermission: {id: 3},
    };
  try {
    const response = await api.post('', user);
    if (response.status === 201) {
      return `Usuário "${response.data.email}" criado com sucesso!`;
    }
    return 'Usuário já cadastrado!';
  } catch (error) {
    console.log(`Ocorreu um erro ${error}`);
  }
}

export async function getAllUsersRepo() {
  try {
    const response = await api.get('all-users');
    return response.data;
  } catch (error) {
    DefaultAlert();
  }
}

export async function createNewUserRepo(
  email: string,
  password: string,
  userPermissionId: number,
) {
  try {
    const response = await api.post(PATH, {
      email: email,
      password: password,
      userPermission: {id: userPermissionId},
    });
    return response.data.email;
  } catch (error) {
    DefaultAlert();
  }
}
