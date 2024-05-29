import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {StoreKeys} from './StoreKeys';
import {AuthResponse} from '@domain';
import {mmkvStorage} from '../mmkv/mmkv';

interface AuthStore {
  authCredentials: AuthResponse | null;
  saveCredentials: (authCredentials: AuthResponse) => void;
  removeCredentials: () => void;
}

const authStore = create(
  persist<AuthStore>(
    set => ({
      authCredentials: null,
      saveCredentials: (authCredentials: AuthResponse) =>
        set(() => ({authCredentials})),
      removeCredentials: () => set({authCredentials: null}),
    }),
    {
      name: StoreKeys.AUTH_CREDENTIALS,
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);

export function useAuthStore() {
  const authCredentials = authStore(state => state.authCredentials);
  const user = authStore(state => state.authCredentials?.user || null);
  const saveCredentials = authStore(state => state.saveCredentials);
  const removeCredentials = authStore(state => state.removeCredentials);

  return {
    authCredentials,
    user,
    saveCredentials,
    removeCredentials,
  };
}
