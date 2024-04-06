import {api} from '@api';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';

const PATH = '/profiles';

async function getAll(user: boolean) {
  return await api.get(PATH, {params: user});
}

async function create(request: ProfileCreateRequest) {
  return await api.post(PATH, request);
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
