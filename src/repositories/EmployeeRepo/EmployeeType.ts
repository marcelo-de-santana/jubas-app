import {ProfileRequestDTO, ProfileResponseDTO} from '../ProfileRepo';
import {
  WorkingHoursRequestDTO,
  WorkingHoursResponseDTO,
} from '../WorkingHoursRepo';

export interface EmployeeRequestDTO {
  id?: string;
  name?: string;
  statusProfile?: boolean;
  profile?: ProfileRequestDTO;
  workingHours?: WorkingHoursRequestDTO;
}

export interface EmployeeResponseDTO {
  id: string;
  profile: ProfileResponseDTO;
  workingHours: WorkingHoursResponseDTO;
  services: [] | [{id: string; name: string; timeDuration?: string}];
}

export interface EmployeeUpdateRequestDTO {
  employeeId: string;
  profileId?: string;
  workingHoursId?: number;
}
