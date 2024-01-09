import {useFetchApi} from '@hooks';
import {ProfileResponse} from '../profileTypes';
import {profileApi} from '../profileApi';

export interface CreateProfileRequest {
  userId: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}

export function useProfileCreate() {
  return useFetchApi<ProfileResponse, CreateProfileRequest>({
    apiFn: ({cpf, name, statusProfile, userId}) =>
      profileApi.create(name, cpf, statusProfile, userId),
  });
}
