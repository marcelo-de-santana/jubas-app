export interface AuthRequest {
  email: string;
  password: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  permission?: PermissionType;
}

export interface UpdateUserRequest {
  userId: string;
  email?: string;
  password?: string;
  permissionId?: number;
}

type PermissionType = 'ADMIN' | 'BARBEIRO' | 'CLIENTE';
