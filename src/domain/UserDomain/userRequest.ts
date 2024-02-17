export interface AuthUserRequest {
  email: string;
  password: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  permissionId: number;
}

export interface UpdateUserRequest {
  userId: string;
  email?: string;
  password?: string;
  permissionId?: number;
}