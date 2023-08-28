export type UserType = {email: string; password: string};

export type MinimalUserResponseDTO = {
  id?: string;
  email: string;
  password: string;
  userPermission: {
    id: number;
    type?: string;
  };
};
