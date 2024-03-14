export interface EmployeeCreateRequest {
  profileId: string;
  workingHourId: string;
}

export interface EmployeeSpecialtiesRequest {
  employeeId: string;
  specialties: string[];
}

export interface EmployeeWorkingHourRequest {
  employeeId: string;
  workingHourId: string;
}
