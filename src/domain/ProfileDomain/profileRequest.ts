export interface ProfileUpdateRequest {
  id: string;
  name?: string;
  cpf?: string;
  statusProfile?: boolean;
}
export interface RecoveryPasswordRequest {
  email: string;
  password: string;
  cpf: string;
}

export interface ProfileCreateRequest {
  userId: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}
