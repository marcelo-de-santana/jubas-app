import {api} from '@api';
import {PermissionRequest} from './permissionRequest';

const PATH = '/permissions';

async function getUsersByPermission(permissionType: PermissionRequest) {
  return await api.get(`${PATH}/${permissionType}/users`);
}

async function getProfilesByPermission(permissionType: PermissionRequest) {
  return await api.get(`${PATH}/${permissionType}/profiles`);
}

export const permissionApi = {
  getUsersByPermission,
  getProfilesByPermission,
};
