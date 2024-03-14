import {SpecialtyResponse} from '../SpecialtyDomain/specialtyResponse';

export interface CategoryResponse {
  id: number;
  name: string;
}

export interface CategorySpecialtiesResponse extends CategoryResponse {
  specialties: SpecialtyResponse[];
}
