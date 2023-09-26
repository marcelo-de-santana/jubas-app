export type UserType = {email: string; password: string};

export type MinimalUserResponseDTO = {
  id: string;
  email: string;
};

export type MinimalUserRequestDTO = {
  id?: string;
  email: string;
  password?: string;
};

export type UserResponseDTO = {
  id: string;
  email: string;
  userPermission: {
    id: number;
    type: string;
  };
};

export type UserRequestDTO = {
  id?: string;
  email: string;
  password?: string;
  userPermission?: {
    id?: number;
    type?: string;
  };
};
