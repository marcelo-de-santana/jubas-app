import {PermissionType} from './userResponse';

export interface CreateUserRequest {
  email: string;
  password: string;
  permission?: PermissionType;
}

export interface UpdateUserRequest {
  userId: string;
  email?: string;
  password?: string;
  permission?: string;
}
