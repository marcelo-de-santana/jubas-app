import {useFetch} from '@hooks';
import {ProfileResponse} from './profileResponse';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';
import {profileApi} from './profileApi';

function create() {
  return useFetch<ProfileResponse, ProfileCreateRequest>(profileApi.create);
}

function recoveryPassword() {
  return useFetch<ProfileResponse, RecoveryPasswordRequest>(
    profileApi.recoveryPassword,
  );
}

function remove() {
  return useFetch<void, string>(profileApi.remove);
}

function update() {
  return useFetch<ProfileResponse, ProfileUpdateRequest>(profileApi.update);
}

export const profileUseCases = {create, recoveryPassword, remove, update};
