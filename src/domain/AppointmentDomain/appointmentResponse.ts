import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

export interface EmployeeScheduleResponse {
  id: string;
  name: string;
  workingHours: ScheduleTimeAvailableResponse[];
}

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

export interface ScheduleTimeAvailableResponse {
  time: string;
  isAvailable: boolean;
  appointmentId?: string;
}

export interface DayOfWeekResponse {
  date: string;
  available: boolean;
}
