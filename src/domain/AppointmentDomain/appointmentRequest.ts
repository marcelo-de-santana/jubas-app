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

export type AppointmentGetAllRequest = {
  date: string;
};

export type AppointmentCreateRequest = Omit<
  AppointmentRequest,
  'appointmentId' | 'appointmentStatus'
>;
