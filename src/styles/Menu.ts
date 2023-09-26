import {StyleSheet} from 'react-native';
import { colorRegistry } from './Colors';

export const registryMenu = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: '1%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    width: '32%',
  },
  'box-tab': {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: '32%',
  },
  'tab-style-lavender-gray': {
    borderColor: colorRegistry['lavender-gray'],
    borderWidth: 1,
  },
  'tab-style-steel-blue': {
    backgroundColor: colorRegistry['steel-blue'],
    marginBottom: 5,
  },
  boxFlexRowMb: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export type MenuName = keyof typeof registryMenu;
