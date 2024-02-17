import {ProfileResponse} from '../Profile';
import {UserResponse} from '../UserDomain/userResponse';

export interface PermissionProfileResponse {
  id: number;
  type: string;
  profiles: ProfileResponse[];
}

export interface PermissionUserResponse {
  id: number;
  type: string;
  users: UserResponse[];
}

export interface PermissionResponse {
  id: number;
  type: string;
}
