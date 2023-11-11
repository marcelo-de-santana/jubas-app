import {StyleSheet} from 'react-native';
import {colorRegistry} from './Colors';
import {useDimensions} from '@hooks';

const {width} = useDimensions();

export const buttonStyle = StyleSheet.create({
  box: {
    borderColor: colorRegistry.midnightBlueTransparent,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: width * 0.3,
    padding: 10,
    width: width * 0.3,
    margin: width * 0.006,
  },
  'view-box': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  'tab-light-gray': {
    borderColor: colorRegistry.lavenderGray,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.3,
  },
  'tab-blue': {
    backgroundColor: colorRegistry.steelBlue,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.3,
  },
  flexible: {
    flex: 1,
    borderRadius: 6,
    padding: 5,
    justifyContent: 'center',
  },
  inline: {
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    marginVertical: 5,
  },
  center: {
    justifyContent: 'center',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
  floating: {
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  small: {
    padding: 5,
    borderRadius: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  'inline-one-fifth-wide': {
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
  'spaced-switch': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export type ButtonStyleName = keyof typeof buttonStyle;
