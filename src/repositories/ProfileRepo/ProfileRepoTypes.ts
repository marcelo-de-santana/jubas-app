import {MinimalUserRequestDTO, MinimalUserResponseDTO} from '../UserRepo';

export type MinimaProfilelResponseDTO = {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
};

export interface ProfileRequestDTO {
  id?: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
  user: MinimalUserRequestDTO;
}

export type MinimalProfileRequestDTO = {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
};

export interface ProfileResponseDTO {
  id: string;
  name: string;
  cpf: number;
  statusProfile: boolean;
  user: MinimalUserResponseDTO;
}
