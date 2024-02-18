import { CategoryResponse } from "../CategoryDomain/categoryResponse";

export interface SpecialtyResponse {
  id: string;
  name: string;
  timeDuration: string;
  category: CategoryResponse;
}


