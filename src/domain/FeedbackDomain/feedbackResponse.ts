import {AppointmentResponse} from '../AppointmentDomain/appointmentResponse';

export interface FeedbackResponse extends AppointmentResponse {
  createdAt: string;
  comment: string;
  rating: RatingType;
}

enum Rating {
  MUITO_RUIM = 'Muito ruim',
  RUIM = 'Ruim',
  REGULAR = 'Regular',
  BOM = 'Box',
  EXCELENTE = 'Excelente',
}

export type RatingType = keyof typeof Rating;
