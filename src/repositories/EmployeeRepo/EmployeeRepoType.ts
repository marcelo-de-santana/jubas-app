import {MinimaProfilelResponseDTO} from '../ProfileRepo';
import {WorkingHoursResponseDTO} from '../WorkingHoursRepo';

export type EmployeeRequestDTO = {
  id?: string;
  name: string;
  statusProfile?: boolean;
  user: {
    id?: string;
    email?: string;
  };
  workingHours?: {
    id: string;
  };
};

export type EmployeeResponseDTO = {
  id: string;
  profile: MinimaProfilelResponseDTO;
  workingHours: WorkingHoursResponseDTO;
  services: [] | [{id: string; name: string; timeDuration?: string}];
};
