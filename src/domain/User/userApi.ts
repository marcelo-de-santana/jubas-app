import {api} from '@services';

const PATH = '/user';

async function getList() {
  return await api.get(PATH);
}

async function getListByPermission(id: number) {
  return await api.get(`${PATH}/permission/${id}`);
}

async function auth(email: string, password: string) {
  return await api.post(`${PATH}/login`, {email, password});
}

async function create(
  email: string,
  password: string,
  userPermissionId: number,
) {
  return await api.post(`${PATH}/register`, {
    email,
    password,
    userPermissionId,
  });
}

async function update(
  id: string,
  email: string,
  password: string,
  userPermissionId: number,
) {
  return await api.patch(`${PATH}/${id}`, {
    email,
    password,
    userPermissionId,
  });
}

export const userApi = {
  auth,
  create,
  getList,
  getListByPermission,
  update,
};
