export interface UserResponse {
  id: string;
  email: string;
  permission: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  user: UserResponse;
}

export interface UserPermissionResponse {
  id: string;
  email: string;
  permission: string;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  permission: string;
  profiles: IProfileResponse[];
}

export interface IProfileResponse {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}
