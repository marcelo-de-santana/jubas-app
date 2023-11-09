export interface ProfileToCreateRequestDTO {
  name: string;
  cpf: string;
  statusProfile: boolean;
  userId: string;
}

export interface ProfileToPartiallyUpdateRequestDTO {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}

export interface ProfileResponse {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}
