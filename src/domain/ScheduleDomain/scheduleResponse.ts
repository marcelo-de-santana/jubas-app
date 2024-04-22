export interface DayOfWeekResponse {
  date: string;
  available: boolean;
}

export interface ScheduleResponse {
  date: string;
  available: boolean;
  employees?: EmployeeScheduleTimeResponse[];
}

export interface ScheduleTimeResponse {
  time: string;
  available: boolean;
  appointmentId?: string;
}

export interface EmployeeScheduleTimeResponse {
  id: string;
  name: string;
  workingHours: ScheduleTimeResponse[];
}
