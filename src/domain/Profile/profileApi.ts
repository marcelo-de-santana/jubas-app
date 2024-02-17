import {api} from '@services';

const PATH = '/profile';

async function create(
  name: string,
  cpf: string,
  statusProfile: boolean,
  userId: string,
) {
  return await api.post(PATH, {
    name,
    cpf,
    statusProfile,
    userId,
  });
}

async function recoveryPassword(
  email: string,
  newPassword: string,
  profileCpf: string,
) {
  return await api.post(`${PATH}/recovery-password`, {
    email,
    newPassword,
    profileCpf,
  });
}

async function update(
  profileId: string,
  name?: string,
  cpf?: string,
  statusProfile?: boolean,
) {
  return await api.patch(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
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
