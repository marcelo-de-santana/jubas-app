import {api} from '@services';
import {
  AuthRequest,
  CreateUserRequest,
  UpdateUserRequest,
} from './userRequest';

const PATH = '/users';

async function getById(userId: string) {
  return await api.get(`${PATH}/${userId}`);
}

async function getAll() {
  return await api.get(PATH);
}

async function auth(request: AuthRequest) {
  return await api.post('/auth', request);
}

async function create(request: CreateUserRequest) {
  return await api.post(PATH, request);
}

async function update(request: UpdateUserRequest) {
  return await api.patch(`${PATH}/${request.userId}`, {
    email: request.email,
    password: request.password,
    permissionId: request.permissionId,
  });
}

export const userApi = {
  auth,
  create,
  getById,
  getAll,
  update,
};
