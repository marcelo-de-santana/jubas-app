import {CategoryResponse} from '../CategoryDomain';

export interface SpecialtyResponse {
  id: string;
  name: string;
  timeDuration: string;
  category: CategoryResponse;
}


