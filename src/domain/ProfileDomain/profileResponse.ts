import {UserResponse} from '../UserDomain/userResponse';

export interface ProfileResponse {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}

export interface ProfileUserResponse extends ProfileResponse {
  user?: UserResponse;
}
