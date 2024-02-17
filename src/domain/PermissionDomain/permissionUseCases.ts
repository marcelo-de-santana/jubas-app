import {useFetch} from '@hooks';
import {
  PermissionProfileResponse,
  PermissionResponse,
  PermissionUserResponse,
} from './permissionResponse';
import {permissionApi} from './permissionApi';

function getAll() {
  return useFetch<PermissionResponse[]>(permissionApi.getAll);
}
function getProfilesById() {
  return useFetch<PermissionProfileResponse, number>(
    permissionApi.getProfilesByPermission,
  );
}
function getUsersById() {
  return useFetch<PermissionUserResponse, number>(
    permissionApi.getUsersByPermission,
  );
}

export const permissionUseCases = {
  getAll,
  getProfilesById,
  getUsersById,
};
