import {api} from '@services';
import {AuthRequest} from './authRequest';
import {AuthResponse} from './authResponse';

async function auth(request: AuthRequest): Promise<AuthResponse> {
  return (await api.post('/auth', request)).data;
}

export const authApi = {auth};
