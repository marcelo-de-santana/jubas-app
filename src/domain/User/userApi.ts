import {api} from '@services';

const PATH = '/user';

async function getById(userId: string) {
  return await api.get(`${PATH}/${userId}`);
}

async function getList() {
  return await api.get(PATH);
}

async function getProfilesById(userId: string) {
  return await api.get(`${PATH}/${userId}/profile`);
}

async function getListByPermission(permissionId: number) {
  return await api.get(`${PATH}/permission/${permissionId}`);
}

async function auth(email: string, password: string) {
  return await api.post(`${PATH}/login`, {email, password});
}

async function create(email: string, password: string, permissionId: number) {
  return await api.post(`${PATH}`, {
    email,
    password,
    permissionId,
  });
}

async function update(
  userId: string,
  email?: string,
  password?: string,
  permissionId?: number,
) {
  return await api.patch(`${PATH}/${userId}`, {
    email,
    password,
    permissionId,
  });
}

export const userApi = {
  auth,
  create,
  getById,
  getList,
  getProfilesById,
  getListByPermission,
  update,
};
