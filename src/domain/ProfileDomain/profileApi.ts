import {api} from '@services';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';
import {ProfileUserResponse} from './profileResponse';

const PATH = '/profiles';

async function getAll(user?: boolean): Promise<ProfileUserResponse[]> {
  return (await api.get(PATH, {params: {user}})).data;
}

async function create(request: ProfileCreateRequest): Promise<void> {
  return (await api.post(PATH, request)).data;
}

async function recoveryPassword(
  request: RecoveryPasswordRequest,
): Promise<void> {
  return (await api.post(PATH + '/recovery-password', request)).data;
}

async function update(request: ProfileUpdateRequest) {
  return await api.patch(PATH + '/' + request.id, {
    name: request.name,
    cpf: request.cpf,
    statusProfile: request.statusProfile,
    userId: request.userId,
  });
}

async function remove(id: string): Promise<void> {
  return (await api.delete(PATH + '/' + id)).data;
}

export const profileApi = {
  getAll,
  create,
  update,
  remove,
  recoveryPassword,
};
