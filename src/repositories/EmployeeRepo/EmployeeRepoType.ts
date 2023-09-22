import {MinimaProfilelResponseDTO} from '../ProfileRepo';

export type EmployeeRequestDTO = {
  id?: string;
  name: string;
  statusProfile?: boolean;
  user: {
    id?: string;
    email?: string;
  };
  operationTime?: {
    id: string;
  };
};

export type EmployeeResponseDTO = {
  id: string;
  profile: MinimaProfilelResponseDTO;
  operationTime: {
    id: number;
    startTime: string;
    startInterval: string;
    endInterval: string;
    endTime: string;
  };
  services: [] | [{id: string; name: string; timeDuration?: string}];
};
