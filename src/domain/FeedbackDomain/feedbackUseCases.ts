import {QueryKeys} from '@services';
import {useMutation, useQuery} from '@tanstack/react-query';
import {feedbackApi} from './feedbackApi';

export function useFeedbackGetById(appointmentId: string) {
  return useQuery({
    queryKey: [QueryKeys.FeedbackGetById],
    queryFn: () => feedbackApi.getById(appointmentId),
  });
}

export function useFeedbackCreate(){
    return useMutation({mutationFn: feedbackApi.create})
}
