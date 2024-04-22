import {api} from '@services';
import {FeedbackResponse} from './feedbackResponse';
import {FeedbackCreateRequest} from './feedbackRequest';

const PATH = '/feedbacks';

async function getById(appointmentId: string): Promise<FeedbackResponse> {
  return (await api.get(PATH + '/' + appointmentId)).data;
}

async function create(request: FeedbackCreateRequest): Promise<void> {
  const response = await api.put(PATH, {
    ...request,
  });
  return response.data;
}

export const feedbackApi = {
  getById,
  create,
};
