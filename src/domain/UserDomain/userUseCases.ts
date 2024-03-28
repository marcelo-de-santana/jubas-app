import {userApi} from './userApi';
import {useFetch} from '@hooks';
import {
  AuthResponse,
  UserPermissionResponse,
  UserProfileResponse,
  UserResponse,
} from './userResponse';
import {AuthRequest, CreateUserRequest, UpdateUserRequest} from './userRequest';

function auth() {
  return useFetch<AuthResponse, AuthRequest>(userApi.auth);
}
function create() {
  return useFetch<UserResponse, CreateUserRequest>(userApi.create);
}
function getAll() {
  return useFetch<UserResponse[]>(userApi.getAll);
}
function getById() {
  return useFetch<UserProfileResponse, string>(userApi.getById);
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
};
