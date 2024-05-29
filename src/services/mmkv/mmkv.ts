import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

const mmkv = new MMKV();

export const mmkvStorage: StateStorage = {
  getItem: key => {
    const value = mmkv.getString(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key, value) => {
    mmkv.set(key, JSON.stringify(value));
  },
  removeItem: key => {
    mmkv.delete(key);
  },
};
