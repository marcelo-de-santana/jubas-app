import {api} from '@services';
import {
  DayOfWeekResponse,
  DaysAvailability,
  EmployeeScheduleTimeResponse,
  ScheduleResponse,
} from './scheduleResponse';

const PATH = '/schedules';

async function getDaysOfAttendance(): Promise<DayOfWeekResponse[]> {
  return (await api.get(PATH + '/days-of-attendance')).data;
}

async function getSchedule(specialtyId: string): Promise<ScheduleResponse[]> {
  return (await api.get(PATH, {params: {specialtyId}})).data;
}

async function getScheduleByDate({
  date,
}: {
  date: string;
}): Promise<EmployeeScheduleTimeResponse[]> {
  const response = await api.get(PATH + '/by-date', {
    params: {date},
  });
  return response.data;
}

async function getRangeOfAttendanceDays(): Promise<DaysAvailability> {
  return (await api.get(PATH + '/range-of-attendance-days')).data;
}

async function updateRangeOfAttendanceDays(
  intervalOfDays: number,
): Promise<void> {
  return (await api.put(PATH + '/range-of-attendance-days/' + intervalOfDays))
    .data;
}

async function getDaysWithoutAttendance(): Promise<string[]> {
  return (await api.get(PATH + '/days-without-attendance')).data;
}

async function addDaysWithoutAttendance(days: string[]): Promise<void> {
  return (await api.post(PATH + '/days-without-attendance', [...days])).data;
}

async function removeDaysWithoutAttendance(days: string[]): Promise<void> {
  return (await api.delete(PATH + '/days-without-attendance', {data: days}))
    .data;
}

export const scheduleApi = {
  getSchedule,
  getScheduleByDate,
  getDaysOfAttendance,
  getDaysWithoutAttendance,
  getRangeOfAttendanceDays,
  updateRangeOfAttendanceDays,
  addDaysWithoutAttendance,
  removeDaysWithoutAttendance,
};
