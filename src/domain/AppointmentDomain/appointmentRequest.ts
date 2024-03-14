export interface AppointmentRequest {
  appointmentId: string;
  date: string;
  time: string;
  employeeId: string;
  clientId: string;
  specialtyId: string;
}

export type AppointmentGetAllRequest = Partial<
  Pick<AppointmentRequest, 'date' | 'employeeId' | 'specialtyId'>
>;

export type AppointmentCreateRequest = Omit<
  AppointmentRequest,
  'appointmentId'
>;
