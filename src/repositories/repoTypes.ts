export type UserType = {email: string; password: string};

export type BarberResponseDTO = {
  id: string;
  name: string;
  statusProfile: boolean;
  user: {
    id: string;
    email: string;
  };
  operationTime: {
    id: string;
  };
};

export type BarberRequestDTO = {
  id: string;
  name: string;
  statusProfile: boolean;
  user: {
    id: string;
    userPermission: {
      id: string;
      type: string;
    };
  };
};
