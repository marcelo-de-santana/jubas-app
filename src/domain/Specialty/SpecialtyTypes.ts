import {CategoryResponse} from '../Category';

export interface SpecialtyResponse {
  id: string;
  name: string;
  timeDuration: string;
  category: CategoryResponse;
}


