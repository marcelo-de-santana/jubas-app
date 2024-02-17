import {api} from '@services';

const PATH = '/permission';

async function getAll() {
  return await api.get(PATH);
}

async function getUsersByPermission(permissionId: number) {
  return await api.get(`${PATH}/${permissionId}/users`);
}

async function getProfilesByPermission(permissionId: number) {
  return await api.get(`${PATH}/${permissionId}/profiles`);
}

export const permissionApi = {
  getAll,
  getUsersByPermission,
  getProfilesByPermission,
};
