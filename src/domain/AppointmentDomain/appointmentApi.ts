import {api} from '@services';
import {
  AppointmentCreateRequest,
  AppointmentGetAllRequest,
  AppointmentRequest,
} from './appointmentRequest';
import {
  EmployeeScheduleResponse,
  DayOfWeekResponse,
  AppointmentResponse,
} from './appointmentResponse';

const PATH = '/appointments';

async function getAll({
  date,
}: AppointmentGetAllRequest): Promise<EmployeeScheduleResponse[]> {
  const response = await api.get(PATH, {
    params: {date},
  });
  return response.data;
}

async function getById(appointmentId: string): Promise<AppointmentResponse> {
  return (await api.get(PATH + '/' + appointmentId)).data;
}

async function getDaysOfAttendance(): Promise<DayOfWeekResponse[]> {
  return (await api.get(PATH + '/days-of-attendance')).data;
}

async function create({
  date,
  time,
  employeeId,
  clientId,
  specialtyId,
}: AppointmentCreateRequest) {
  return await api.post(PATH, {
    dateTime: date + ' ' + time,
    employeeId,
    clientId,
    specialtyId,
  });
}
async function update({
  appointmentId,
  clientId,
  employeeId,
  specialtyId,
  date,
  time,
  appointmentStatus,
}: AppointmentRequest) {
  const response = await api.patch(PATH + '/' + appointmentId, {
    clientId,
    employeeId,
    specialtyId,
    date,
    time,
    appointmentStatus,
  });
  return response.data;
}

export const appointmentApi = {
  getAll,
  getById,
  getDaysOfAttendance,
  create,
  update,
};
