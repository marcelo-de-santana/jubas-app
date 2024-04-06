import {useFetch} from '@hooks';
import {ProfileUserResponse} from './profileResponse';
import {ProfileCreateRequest} from './profileRequest';
import {profileApi} from './profileApi';
import {useMutation} from '@tanstack/react-query';

function getAll() {
  return useFetch<ProfileUserResponse[], boolean>(profileApi.getAll);
}

function create() {
  return useFetch<void, ProfileCreateRequest>(profileApi.create);
}

export function useProfileRecoveryPassword() {
  return useMutation({mutationFn: profileApi.recoveryPassword});
}

export function useProfileRemove() {
  return useMutation({mutationFn: profileApi.remove});
}

export function useProfileUpdate() {
  return useMutation({mutationFn: profileApi.update});
}

export const profileUseCases = {
  getAll,
  create,
};
