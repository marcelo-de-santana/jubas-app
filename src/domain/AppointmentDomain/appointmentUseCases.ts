import {QueryKeys, invalidateQueries} from '@hooks';
import {appointmentApi} from './appointmentApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';

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

export function useAppointmentGetDaysOfAttendance() {
  const {data: daysOfWeek} = useQuery({
    queryKey: [QueryKeys.DaysOfAttendance],
    queryFn: appointmentApi.getDaysOfAttendance,
  });

  const chooseDay = (day: string) => {
    setDayOfWeek(day);
  };
  const hasDayOfWeek = daysOfWeek && daysOfWeek.length > 0;

  const [dayOfWeek, setDayOfWeek] = useState<string | undefined>(
    hasDayOfWeek ? daysOfWeek[0].date : undefined,
  );

  return {
    daysOfWeek,
    dayOfWeek,
    chooseDay,
  };
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
