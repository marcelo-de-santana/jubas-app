export interface SpecialtyRequest {
  id: string;
  name: string;
  timeDuration: string;
  price: number;
  categoryId: number;
}

export type SpecialtyCreateRequest = Omit<SpecialtyRequest, 'id'>;
