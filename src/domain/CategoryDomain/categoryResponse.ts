import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

export interface CategoryResponse {
  id: number;
  name: string;
}

export interface CategorySpecialtiesResponse {
  id: number;
  name: string;
  specialties: SpecialtyResponse[];
}
