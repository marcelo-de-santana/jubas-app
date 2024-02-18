import {api} from '@services';

const PATH = '/permissions';

async function getUsersByPermission(permissionId: string) {
  return await api.get(`${PATH}/${permissionId}/users`);
}

async function getProfilesByPermission(permissionId: string) {
  return await api.get(`${PATH}/${permissionId}/profiles`);
}

export const permissionApi = {
  getUsersByPermission,
  getProfilesByPermission,
};
