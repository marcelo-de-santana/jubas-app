import {StyleSheet, Dimensions} from 'react-native';
import {colorRegistry} from './Colors';

const {height, width} = Dimensions.get('window');

export const buttonRegistry = StyleSheet.create({
  'menu-box': {
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    height: width * 0.29,
    padding: 10,
    margin: width * 0.01,
    width: width * 0.29,
  },
  'menu-tab-lavender-gray': {
    borderColor: colorRegistry['lavender-gray'],
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.3,
  },
  'menu-tab-steel-blue': {
    backgroundColor: colorRegistry['steel-blue'],
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.3,
  },
  'square-flex': {
    flex: 1,
    borderRadius: 6,
    padding: 5,
    justifyContent: 'center',
  },
  'square-inline': {
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    marginVertical: 5,
  },
  'square-right': {
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  'square-small': {
    padding: 5,
    borderRadius: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  'square-inline-one-fifth-wide': {
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    marginVertical: 5,
    width: width / 5,
  },
  switch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  'switch-spaced': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

type buttonType = typeof buttonRegistry;
export type ButtonName = keyof buttonType;
