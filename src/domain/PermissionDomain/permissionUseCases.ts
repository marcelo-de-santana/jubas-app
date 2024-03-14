import {useFetch} from '@hooks';
import {permissionApi} from './permissionApi';
import {UserResponse} from '../UserDomain/userResponse';
import {ProfileResponse} from '../ProfileDomain/profileResponse';
import {PermissionRequest} from './permissionRequest';

function getProfilesByPermissionType() {
  return useFetch<ProfileResponse[], PermissionRequest>(
    permissionApi.getProfilesByPermission,
  );
}
function getUsersByPermissionType() {
  return useFetch<UserResponse, PermissionRequest>(
    permissionApi.getUsersByPermission,
  );
}

export const permissionUseCases = {
  getProfilesByPermissionType,
  getUsersByPermissionType,
};
