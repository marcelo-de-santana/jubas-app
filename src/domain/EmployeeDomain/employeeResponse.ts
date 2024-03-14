import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';
import {WorkingHourResponse} from '../WorkingHourDomain/workingHourResponse';

export interface EmployeeResponse {
  id: string;
  name: string;
  statusProfile: boolean;
  workingHour: WorkingHourResponse;
  specialties: SpecialtyResponse[];
}
