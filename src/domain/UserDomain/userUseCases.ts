import {userApi} from './userApi';
import {useFetch} from '@hooks';
import {
  UserPermissionResponse,
  UserProfileResponse,
  UserResponse,
} from './userResponse';
import {AuthUserRequest, CreateUserRequest, UpdateUserRequest} from './userRequest';

function auth() {
  return useFetch<UserPermissionResponse, AuthUserRequest>(userApi.auth);
}
function create() {
  return useFetch<UserResponse, CreateUserRequest>(userApi.create);
}
function getProfilesByUserId() {
  return useFetch<UserProfileResponse, string>(userApi.getProfilesByUser);
}
function getAll() {
  return useFetch<UserResponse[]>(userApi.getAll);
}
function getById() {
  return useFetch<UserResponse, string>(userApi.getById);
}
function update() {
  return useFetch<UserPermissionResponse, UpdateUserRequest>(userApi.update);
}

export const userUseCases = {
  auth,
  create,
  update,
  getAll,
  getById,
  getProfilesByUserId,
};
