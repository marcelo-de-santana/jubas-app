import {useFetchApi} from '@hooks';
import {ProfileResponse} from '../profileTypes';
import {profileApi} from '../profileApi';

interface UserRequestToRecoveryPassword {
  email: string;
  password: string;
  cpf: string;
}

export function useProfileRecoveryPassword() {
  const state = useFetchApi<ProfileResponse, UserRequestToRecoveryPassword>({
    apiFn: ({email, password, cpf}) =>
      profileApi.recoveryPassword(email, password, cpf),
  });
  return {
    recoveryPass: state.fetchData,
    ...state,
  };
}
