import {QueryKeys, invalidateQueries} from '@services';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {scheduleApi} from './scheduleApi';
import {mask} from '@utils';

export function useScheduleGetAllByDate(date = mask.formatDate(new Date())) {
  return useQuery({
    queryFn: () => scheduleApi.getScheduleByDate({date}),
    queryKey: [QueryKeys.AppointmentGetAll, date],
  });
}

export function useAppointmentGetDaysOfAttendance() {
  const {data: daysOfWeek} = useQuery({
    queryKey: [QueryKeys.DaysOfAttendance],
    queryFn: scheduleApi.getDaysOfAttendance,
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

export function useAppointmentGetSchedule({
  specialtyId,
}: {
  specialtyId: string;
}) {
  return useQuery({
    queryKey: [QueryKeys.AppointmentGetSchedule],
    queryFn: () => scheduleApi.getSchedule(specialtyId),
  });
}

export function useScheduleGetRangeOfAttendanceDays() {
  return useQuery({
    queryKey: [QueryKeys.GetRangeOfAttendanceDays],
    queryFn: () => scheduleApi.getRangeOfAttendanceDays(),
  });
}

export function useScheduleUpdateRangeOfAttendanceDays() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: scheduleApi.updateRangeOfAttendanceDays,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.GetRangeOfAttendanceDays],
      });
    },
  });
}

export function useScheduleGetDaysWithoutAttendance() {
  return useQuery({
    queryKey: [QueryKeys.DaysWithoutAttendance],
    queryFn: () => scheduleApi.getDaysWithoutAttendance(),
  });
}

export function useScheduleAddDaysWithoutAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: scheduleApi.addDaysWithoutAttendance,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.DaysWithoutAttendance],
      });
    },
  });
}

export function useScheduleRemoveDaysWithoutAttendance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: scheduleApi.removeDaysWithoutAttendance,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.DaysWithoutAttendance],
      });
    },
  });
}
