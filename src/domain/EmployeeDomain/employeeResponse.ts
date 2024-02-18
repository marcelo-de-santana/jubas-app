import {ProfileResponse} from '../ProfileDomain/profileResponse';
import {WorkingHourResponse} from '../WorkingHourDomain/workingHourResponse';

export interface EmployeeResponse {
  id: string;
  profile: ProfileResponse;
  workingHour: WorkingHourResponse;
  services: [] | {id: string; name: string; timeDuration?: string}[];
}
