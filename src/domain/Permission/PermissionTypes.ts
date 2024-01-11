import {UserResponse} from '../User';

export interface PermissionUserResponse {
  id: number;
  type: string;
  users: UserResponse[];
}

export interface PermissionResponse {
  id: number;
  type: string;
}
