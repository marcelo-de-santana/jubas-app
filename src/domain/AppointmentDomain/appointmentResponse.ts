import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

type GenericDto = {
  id: string;
  name: string;
};

export enum AppointmentStatusEnum {
  MARCADO = 'MARCADO',
  EM_ATENDIMENTO = 'EM_ATENDIMENTO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO',
  AVALIADO = 'AVALIADO',
}

export type AppointmentStatus = keyof typeof AppointmentStatusEnum;

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
