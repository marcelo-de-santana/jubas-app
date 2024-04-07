import {api} from '@api';
import {CreateUserRequest, UpdateUserRequest} from './userRequest';
import {UserProfileResponse} from './userResponse';

const PATH = '/users';

async function getAll(profiles?: boolean): Promise<UserProfileResponse[]> {
  return (await api.get(PATH, {params: {profiles}})).data;
}

async function getById(userId: string): Promise<UserProfileResponse> {
  return (await api.get(PATH + '/' + userId)).data;
}

async function create(request: CreateUserRequest) {
  return (await api.post(PATH, request)).data;
}

async function update({
  userId,
  email,
  password,
  permission,
}: UpdateUserRequest): Promise<void> {
  return (
    await api.patch(PATH + '/' + userId, {
      email,
      password,
      permission,
    })
  ).data;
}

export const userApi = {
  create,
  getById,
  getAll,
  update,
};
