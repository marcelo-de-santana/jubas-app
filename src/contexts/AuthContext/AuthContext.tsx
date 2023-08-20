import {UserType, authUser, authUserFake} from '@repositories';
import {AxiosError} from 'axios';
import {createContext, useContext, useState} from 'react';

type AuthContextProviderProps = {
  children: any;
};

type AuthUser = {
  id: string;
  email: string;
  userPermission: object;
};

type AuthContextType =
  | {
      loading: boolean;
      isAuthenticated: boolean;
      user: AuthUser | null;
      signIn(userData: UserType): void;
    }
  | undefined;

const AuthContext = createContext<AuthContextType>(undefined);

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  async function signIn(userData: UserType) {
    try {
      const response = await authUserFake(userData);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        return false;
      }
    }
  }

  return (
    <AuthContext.Provider value={{loading, isAuthenticated, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
