import {useFetch} from '@hooks';
import {ProfileUserResponse} from './profileResponse';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';
import {profileApi} from './profileApi';

function getAll() {
  return useFetch<ProfileUserResponse[], boolean>(profileApi.getAll);
}

function create() {
  return useFetch<void, ProfileCreateRequest>(profileApi.create);
}

function recoveryPassword() {
  return useFetch<void, RecoveryPasswordRequest>(profileApi.recoveryPassword);
}

function remove() {
  return useFetch<void, string>(profileApi.remove);
}

function update() {
  return useFetch<void, ProfileUpdateRequest>(profileApi.update);
}

export const profileUseCases = {
  getAll,
  create,
  recoveryPassword,
  remove,
  update,
};
