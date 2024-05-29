import {QueryKeys, invalidateQueries} from '@services';
import {appointmentApi} from './appointmentApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useAppointmentGetAll() {
  return useMutation({
    mutationFn: appointmentApi.getAll,
    mutationKey: [QueryKeys.AppointmentGetAll],
  });
}

export function useAppointmentGetById(appointmentId: string) {
  return useQuery({
    queryKey: [QueryKeys.AppointmentGetById],
    queryFn: () => appointmentApi.getById(appointmentId),
  });
}

export function useAppointmentGetByUserId(userId: string) {
  return useQuery({
    queryKey: [QueryKeys.AppointmentGetByUserId],
    queryFn: () => appointmentApi.getByUserId(userId),
  });
}

export function useAppointmentCreate() {
  return useMutation({mutationFn: appointmentApi.create});
}

export function useAppointmentUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: appointmentApi.update,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.AppointmentGetById, QueryKeys.AppointmentGetAll],
      });
    },
  });
}
