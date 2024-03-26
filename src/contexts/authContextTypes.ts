import {AuthResponse, UserResponse} from '@domain';

export type AuthContextType = {
  signIn: (email: string, password: string) => void;
  singOut: () => void;
  authCredentials?: AuthResponse | null;
  user: UserResponse | null;
  isLoading: boolean;
  isError: boolean | null;
  status?: number | null;
};
