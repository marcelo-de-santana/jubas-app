import {
  UserResponseDTO,
  UserToAuthenticatedRequestDTO,
  authUser,
} from '@repositories';
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
  signIn: (user: UserToAuthenticatedRequestDTO) => void;
  singOut: () => void;
  user: UserResponseDTO;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: () => {},
  singOut: () => {},
  user: defaultUser,
});

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [user, setUser] = useState<UserResponseDTO>(defaultUser);

  async function signIn(user: UserToAuthenticatedRequestDTO) {
    const response = await authUser(user);
    if (response?.data) {
      setUser(response.data);
      setAuthentication(true);
    }
  }

  function singOut() {
    setAuthentication(false);
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, singOut, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
