import {AuthResponse, UserResponse} from '@domain';

export type AuthContextType = {
  saveCredentials: (authCredentials: AuthResponse) => Promise<void>;
  authCredentials?: AuthResponse | null;
  user: UserResponse | null;
};
