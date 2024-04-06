import {authApi} from './authApi';
import {useMutation} from '@tanstack/react-query';
import {useAuthContext} from '@contexts';
import {AuthRequest} from './authRequest';
import {useEffect} from 'react';

export function useAuthSignIn() {
  const {saveCredentials} = useAuthContext();

  const mutation = useMutation({
    mutationFn: authApi.auth,
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      saveCredentials(mutation.data);
    }
  }, [mutation.data]);

  return {
    isError: mutation.isError,
    isPending: mutation.isPending,
    signIn: (variables: AuthRequest) => mutation.mutate(variables),
  };
}
