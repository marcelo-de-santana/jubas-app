import {AuthResponse} from '@domain';
import {createContext, useContext, useEffect, useState} from 'react';
import {AuthContextType} from './authContextTypes';
import {registerToken} from '@api';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  saveCredentials: async () => {},
  authCredentials: null,
  user: null,
});

export function AuthContextProvider({
  children,
}: Readonly<AuthContextProviderProps>) {
  const [authCredentials, setAuthCredentials] = useState<AuthResponse | null>(
    null,
  );



  useEffect(() => {
    return ;
  }, [authCredentials]);

  const saveCredentials = async (
    authCredentials: AuthResponse,
  ): Promise<void> => {
    setAuthCredentials(authCredentials);
    registerToken({authCredentials});
  };

  const user = authCredentials?.user || null;

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        user,
        saveCredentials,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
