import {QueryKeys} from '@hooks';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {scheduleApi} from './scheduleApi';

export function useScheduleGetAllByDate() {
  return useMutation({
    mutationFn: scheduleApi.getScheduleByDate,
    mutationKey: [QueryKeys.AppointmentGetAll],
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
