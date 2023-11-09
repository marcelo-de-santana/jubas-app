import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StyleSheet, ViewStyle} from 'react-native';

import {colorRegistry} from './Colors';

export const themeRegistry = StyleSheet.create({
  'box-flex-row': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  'box-flex-row-list': {
    borderRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  'box-items': {
    minHeight: 50,
  },
  'box-items-header': {
    minHeight: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: 10,
  },
  'line-items': {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
    paddingHorizontal: 10,
  },
});

export type ThemeName = keyof typeof themeRegistry;

export function flatListStyle(data: any = []): ViewStyle {
  return {
    flex: data?.length === 0 ? 1 : undefined,
  };
}
