import {api} from '@services';

const PATH = '/employee';

async function create(profileId: string, workingHourId: number) {
  return await api.post(PATH, {profileId, workingHourId});
}

async function findByProfileId(profileId: string) {
  return await api.get(`${PATH}/profile/${profileId}`);
}

async function update(
  employeeId: string,
  profileId: string,
  workingHourId: number,
) {
  return await api.patch(`${PATH}/${employeeId}`, {
    profileId,
    workingHourId,
  });
}
export const employeeApi = {
  create,
  findByProfileId,
  update,
};
