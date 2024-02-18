import {useFetch} from '@hooks';
import {permissionApi} from './permissionApi';
import {UserResponse} from '../UserDomain/userResponse';
import {ProfileResponse} from '../ProfileDomain/profileResponse';

function getProfilesById() {
  return useFetch<ProfileResponse[], string>(
    permissionApi.getProfilesByPermission,
  );
}
function getUsersById() {
  return useFetch<UserResponse, string>(permissionApi.getUsersByPermission);
}

export const permissionUseCases = {
  getProfilesById,
  getUsersById,
};
