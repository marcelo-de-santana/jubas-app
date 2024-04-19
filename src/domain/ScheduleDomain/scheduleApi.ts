import {api} from '@services';
import {
  DayOfWeekResponse,
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

export const scheduleApi = {
  getSchedule,
  getScheduleByDate,
  getDaysOfAttendance,
};
