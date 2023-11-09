import {api} from '@services';

const PATH = '/working-hours';

async function getList() {
  return await api.get(PATH);
}

async function create(
  startTime: string,
  endTime: string,
  startInterval: string,
  endInterval: string,
) {
  return await api.post(PATH, {startTime, startInterval, endInterval, endTime});
}

export const workingHoursApi = {
  getList,
  create,
};
