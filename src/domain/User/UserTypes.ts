export interface MinimalUserResponseDTO {
  id: string;
  email: string;
}

export interface UserToUpdateRequestDTO {
  userId: string;
  email?: string;
  password?: string;
  userPermissionId?: number;
}

export interface UserResponse {
  id: string;
  email: string;
  userPermission: {
    id: number;
    type: string;
  };
}
