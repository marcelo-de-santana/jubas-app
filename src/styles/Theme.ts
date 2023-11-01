import {StyleSheet} from 'react-native';

export const themeRegistry = StyleSheet.create({
  container: {flex: 1},
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
  'box-modal-form': {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  'box-switch': {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'box-items': {
    minHeight: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
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
  'input-modal': {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export type ThemeName = keyof typeof themeRegistry;
