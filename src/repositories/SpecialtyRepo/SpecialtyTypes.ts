import {CategoryResponseDTO} from '../CategoryRepo';

export interface SpecialtyResponseDTO {
  id: string;
  name: string;
  timeDuration: string;
  category: CategoryResponseDTO;
}

export interface SpecialtyToCreateRequestDTO {
  categoryId: number;
  specialtyName: string;
}
