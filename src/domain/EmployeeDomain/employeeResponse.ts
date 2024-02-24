import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';
import {WorkingHourResponse} from '../WorkingHourDomain/workingHourResponse';

export interface EmployeeResponse {
  id: string;
  name: string;
  statusProfile: boolean;
  workingHour: WorkingHourResponse;
  services: SpecialtyResponse[];
}

export interface IPerson {
  id: string;
  name: string;
}