export interface AppointmentResponse {}

export interface ScheduleResponse {
  employeeId: string;
  employeeName: string;
  workingHours: ScheduleTimeResponse[];
}

export interface ScheduleTimeResponse {
  time: string;
  isAvailable: boolean;
}
