import {
  categoryUseCases,
  permissionUseCases,
  userUseCases,
  workingHoursUseCases,
} from '@domain';

export const useApi = {
  category: categoryUseCases,
  permission: permissionUseCases,
  user: userUseCases,
  workingHour: workingHoursUseCases,
};
