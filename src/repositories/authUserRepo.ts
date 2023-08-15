import {api} from '@services';
import {AuthUserType} from './repoTypes';

const PATH = 'login';

export async function authUserRepo(data: AuthUserType) {
  return await api.post(PATH, data);
}
