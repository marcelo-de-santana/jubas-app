export interface MinimalUserResponseDTO {
  id: string;
  email: string;
}

export interface UserResponseDTO {
  id: string;
  email: string;
  userPermission: {
    id: number;
    type: string;
  };
}

export interface UserToCreateRequestDTO {
  email: string;
  password: string;
  userPermissionId: number;
}

export interface UserToAuthenticatedRequestDTO {
  email: string;
  password: string;
}

export interface UserToUpdateRequestDTO {
  userId: string;
  email?: string;
  password?: string;
  userPermissionId?: number;
}
