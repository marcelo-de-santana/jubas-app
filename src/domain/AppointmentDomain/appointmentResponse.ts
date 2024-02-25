export interface AppointmentResponse {
  employeeId: string;
  employeeName: string;
  workingHours: ScheduleTimeAvailableResponse [];
}

export interface ScheduleTimeAvailableResponse {
  time: string;
  isAvailable: boolean;
}

export interface DayOfWeekResponse {
  day: DayOfWeek;
  isAvailable: boolean;
}

export enum DayOfWeek {
  'DOMINGO',
  'SEGUNDA',
  'TERÇA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SÁBADO',
}
