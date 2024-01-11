import {api} from '@services';

const PATH = '/permission';

async function getPermissions() {
  return await api.get(PATH);
}

async function getUsersByPermissionId(permissionId: number) {
  return await api.get(`${PATH}/${permissionId}/users`);
}

export const permissionApi = {
  getPermissions,
  getUsersByPermissionId,
};
