import {ProfileResponse} from '../ProfileDomain/profileResponse';

export interface UserResponse {
  id: string;
  email: string;
  permission: string;
}

export interface UserProfileResponse extends UserResponse {
  profiles?: ProfileResponse[];
}

export interface UserPermissionResponse {
  id: string;
  email: string;
  permission: string;
}

export type PermissionType = 'ADMIN' | 'BARBEIRO' | 'CLIENTE';
