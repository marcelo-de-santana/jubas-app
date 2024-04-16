import {QueryKeys, invalidateQueries, useFetch} from '@hooks';
import {EmployeeResponse} from './employeeResponse';
import {employeeApi} from './employeeApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useEmployeeGetAll({
  available = true,
}: {available?: boolean} = {}) {
  return useQuery({
    queryKey: [QueryKeys.EmployeeGetAll],
    queryFn: () => employeeApi.getAll(available),
  });
}
function getById() {
  return useFetch<EmployeeResponse, string>(employeeApi.getById);
}
function getAppointments() {
  return useFetch<EmployeeResponse, string>(employeeApi.getAppointments);
}
export function useEmployeeCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: employeeApi.create,
    onSuccess: () => {
      invalidateQueries({queryClient, queryKeys: [QueryKeys.EmployeeGetAll]});
    },
  });
}
export function useEmployeeUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: employeeApi.update,
    onSuccess: () => {
      invalidateQueries({queryClient, queryKeys: [QueryKeys.EmployeeGetAll]});
    },
  });
}

export function useEmployeeGetAvailableSpecialties({
  employeeId,
  date,
  time,
}: {
  employeeId: string;
  date: string;
  time: string;
}) {
  return useQuery({
    queryKey: [QueryKeys.EmployeeGetAvailableSpecialties],
    queryFn: () => employeeApi.getAvailableSpecialties(employeeId, date, time),
  });
}

export const employeeUseCases = {
  getById,
  getAppointments,
};
