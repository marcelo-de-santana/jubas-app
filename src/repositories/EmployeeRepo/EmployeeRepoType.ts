import {MinimaProfilelResponseDTO, MinimalProfileRequestDTO} from '../ProfileRepo';
import {UserRequestDTO} from '../UserRepo';
import {WorkingHoursResponseDTO} from '../WorkingHoursRepo';

export type EmployeeRequestDTO = {
  id?: string;
  name: string;
  statusProfile?: boolean;
  profile: MinimalProfileRequestDTO;
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
