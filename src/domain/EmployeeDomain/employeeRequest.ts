export interface EmployeeCreateRequest {
  profileId: string;
  workingHourId: string;
  specialties: string[];
}

export interface EmployeeUpdateRequest
  extends Partial<Omit<EmployeeCreateRequest, 'profileId'>> {
  employeeId: string;
}
