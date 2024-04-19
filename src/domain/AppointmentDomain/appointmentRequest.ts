import {AppointmentStatus} from './appointmentResponse';

export interface AppointmentRequest {
  appointmentId: string;
  employeeId?: string;
  clientId?: string;
  specialtyId?: string;
  date?: string;
  time?: string;
  appointmentStatus?: AppointmentStatus;
}

export type AppointmentCreateRequest = Omit<
  AppointmentRequest,
  'appointmentId' | 'appointmentStatus'
>;
