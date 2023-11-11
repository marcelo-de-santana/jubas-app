import {ProfileResponse} from '@domain';
import {WorkingHoursResponse} from '../WorkingHours';

export interface EmployeeResponse {
  id: string;
  profile: ProfileResponse;
  workingHour: WorkingHoursResponse;
  services: [] | {id: string; name: string; timeDuration?: string}[];
}