export interface AppointmentResponse {
  employeeId: string;
  employeeName: string;
  workingHours: ScheduleTimeAvailableResponse[];
}

export interface ScheduleTimeAvailableResponse {
  time: string;
  isAvailable: boolean;
}

export interface DayOfWeekResponse {
  date: string;
  isAvailable: boolean;
}
