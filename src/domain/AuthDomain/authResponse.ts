import {UserResponse} from '../UserDomain/userResponse';

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  user: UserResponse;
}
