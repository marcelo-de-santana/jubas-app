import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

type GenericDto = {
  id: string;
  name: string;
};

export type AppointmentStatus =
  | 'MARCADO'
  | 'EM_ATENDIMENTO'
  | 'FINALIZADO'
  | 'CANCELADO';

export interface AppointmentResponse {
  id: string;
  employee: GenericDto;
  client: GenericDto;
  specialty: SpecialtyResponse;
  status: AppointmentStatus;
  scheduling: {
    date: string;
    startTime: string;
    endTime: string;
  };
  createdAt: string;
  updatedAt: string | null;
}
