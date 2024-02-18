import {useFetch} from '@hooks';
import {ProfileResponse} from './profileResponse';
import {
  ProfileCreateRequest,
  ProfileUpdateRequest,
  RecoveryPasswordRequest,
} from './profileRequest';
import {profileApi} from './profileApi';

export function useProfileCreate() {
  return useFetch<ProfileResponse, ProfileCreateRequest>(profileApi.create);
}

export function useProfileRecoveryPassword() {
  return useFetch<ProfileResponse, RecoveryPasswordRequest>(
    profileApi.recoveryPassword,
  );
}

export function useProfileRemove() {
  return useFetch<void, string>(profileApi.remove);
}

export function useProfileUpdate() {
  return useFetch<ProfileResponse, ProfileUpdateRequest>(profileApi.update);
}

export const profileUseCases = {};
