import {AuthResponse, userUseCases} from '@domain';
import {createContext, useCallback, useContext, useState} from 'react';
import {AuthContextType} from './authContextTypes';
import {registerToken} from '@services';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  signIn: () => {},
  singOut: () => {},
  authCredentials: null,
  user: null,
  isLoading: false,
  status: null,
  isError: null,
});

export function AuthContextProvider({
  children,
}: Readonly<AuthContextProviderProps>) {
  const [authCredentials, setAuthCredentials] = useState<AuthResponse | null>(
    null,
  );

  const {data, fetch, status, isLoading, isError} = userUseCases.auth();

  if (data?.accessToken && authCredentials === null) {
    setAuthCredentials(data);
    registerToken({authCredentials: data});
  }

  const signIn = (email: string, password: string) => {
    fetch({email, password});
  };

  const singOut = () => {};

  const user = authCredentials?.user || null;

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        user,
        signIn,
        singOut,
        isLoading,
        isError,
        status,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
