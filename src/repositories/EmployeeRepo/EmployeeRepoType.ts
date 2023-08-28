export type BarberRequestDTO = {
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

export type BarberResponseDTO = {
  id: string;
  name: string;
  statusProfile: boolean;
  user: {
    id: string;
    email: string;
    userPermission: {
      id: number;
      type: string;
    };
  };
};
