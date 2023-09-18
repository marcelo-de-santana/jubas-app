export type MinimaProfilelResponseDTO = {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
};

export type ProfileRequestDTO = {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
  user: {
    id: string;
    email: string;
  };
};


export type MinimalProfileRequestDTO = {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
};