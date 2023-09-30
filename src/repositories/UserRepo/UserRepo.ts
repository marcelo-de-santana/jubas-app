import {api} from '@services';
import {UserRequestDTO, UserType} from './UserRepoTypes';
import {AlertComponent} from '@components';

const PATH = '';

export async function authUser(userData: UserType) {
  try {
    return await api.post(PATH, userData);
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
    const response = await api.post(`${PATH}/register`, user);
    if (response.status === 201) {
      return `Usuário "${response.data.email}" criado com sucesso!`;
    }
    return 'Usuário já cadastrado!';
  } catch (error) {
    console.log(`Ocorreu um erro ${error}`);
  }
}

export async function getAllUsers() {
  try {
    const response = await api.get(`${PATH}/all-users`);
    return response.data;
  } catch (error) {
    AlertComponent({});
  }
}

export async function createUser(user: UserRequestDTO) {
  try {
    const response = await api.post(`${PATH}/register`, user);
    AlertComponent({message: `${response.data.email} gravado com sucesso!`});
  } catch (error) {
    AlertComponent({});
  }
}

export async function getAllUsersByPermission(id: number) {
  try {
    const respose = await api.get(`${PATH}/all-users/permission/${id}`);
    return respose.data;
  } catch (error) {
    AlertComponent({});
  }
}

export async function updateUser(user: UserRequestDTO) {
  try {
    const response = await api.put(`${PATH}`, user);
    AlertComponent({
      message: `${response.data.email}  atualizado com sucesso!`,
    });
  } catch (error) {
    AlertComponent({});
  }
}
