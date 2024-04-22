import {RatingType} from './feedbackResponse';

export type FeedbackCreateRequest = {
  appointmentId: string;
  comment: string;
  rating: RatingType;
};
