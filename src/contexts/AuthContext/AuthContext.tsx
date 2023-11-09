import {UserResponse, useUserAuth} from '@domain';
import {createContext, useContext, useState} from 'react';

const defaultUser = {
  id: '',
  email: '',
  userPermission: {
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
  user: UserResponse;
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

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [user, setUser] = useState<UserResponse>(defaultUser);
  const {data, fetchData, status, isLoading, isError} = useUserAuth();

  function signIn(email: string, password: string) {
    fetchData({email, password});
  }

  if (user.id === '' && !!data?.id) {
    setUser(data);
    setAuthentication(true);
  }

  function singOut() {
    setAuthentication(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        singOut,
        user,
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
