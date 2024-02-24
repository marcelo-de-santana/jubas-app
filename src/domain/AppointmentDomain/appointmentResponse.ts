export interface AppointmentResponse {
  employeeId: string;
  employeeName: string;
  workingHours: {time: string; isAvailable: boolean}[];
}
