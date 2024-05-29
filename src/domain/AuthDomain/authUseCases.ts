import {authApi} from './authApi';
import {useMutation} from '@tanstack/react-query';
import {AuthRequest} from './authRequest';
import {registerToken, useAuthStore} from '@services';

export function useAuthSignIn() {
  const {saveCredentials} = useAuthStore();

  const mutation = useMutation({
    mutationFn: authApi.auth,
    onSuccess: data => {
      saveCredentials(data);
      registerToken({authCredentials: data});
    },
  });

  return {
    ...mutation,
    signIn: (variables: AuthRequest) => mutation.mutate(variables),
  };
}
