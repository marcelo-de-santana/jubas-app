import {api} from '@services';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';

const PATH = '/profiles';

async function create(request: ProfileCreateRequest) {
  return await api.post(PATH, request);
}

async function recoveryPassword(request: RecoveryPasswordRequest) {
  return await api.post(`${PATH}/recovery-password`, request);
}

async function update(request: ProfileUpdateRequest) {
  return await api.patch(`${PATH}/${request.id}`, {
    name: request.name,
    cpf: request.cpf,
    statusProfile: request.statusProfile,
  });
}

async function remove(id: string) {
  return await api.delete(`${PATH}/${id}`);
}

export const profileApi = {
  create,
  update,
  remove,
  recoveryPassword,
};
