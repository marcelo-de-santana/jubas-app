export interface EmployeeCreateRequest {
  profileId: string;
  workingHourId: string;
}

export interface EmployeeUpdateRequest {
  employeeId: string;
  profileId?: string;
  workingHourId?: string;
  specialties?: string[];
}
