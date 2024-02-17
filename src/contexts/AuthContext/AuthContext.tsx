import { UserPermissionResponse } from '@domain';
import { useApi } from '@hooks';
import {createContext, useContext, useState} from 'react';

const defaultUser = {
  id: '',
  email: '',
  permission: {
    id: 3,
    type: 'Client',
  },
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => void;
  singOut: () => void;
  isLoading: boolean;
  isError: boolean | null;
  status?: number | null;
  user: UserPermissionResponse;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => {},
  singOut: () => {},
  isLoading: false,
  status: null,
  isError: null,
  user: defaultUser,
});

export function AuthContextProvider({children}: Readonly<AuthContextProviderProps>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserPermissionResponse>(defaultUser);
  const {data, fetch, status, isLoading, isError} = useApi.user.auth();

  const signIn = (email: string, password: string) => {
    fetch({email, password});
  };

  if (user.id === '' && !!data?.id) {
    setUser(data);
    setIsAuthenticated(true);
  }

  const singOut = () => {
    setIsAuthenticated(false);
  };

  const authContextValue = {
    isAuthenticated,
    signIn,
    singOut,
    user,
    isLoading,
    isError,
    status,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
