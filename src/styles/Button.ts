import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './Colors';

const {width} = Dimensions.get("screen");

export const buttonStyle = StyleSheet.create({
  box: {
    borderColor: colors.midnightBlueTransparent,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: width * 0.3,
    padding: 10,
    width: width * 0.3,
    margin: width * 0.006,
  },
  center: {
    justifyContent: 'center',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
  flexible: {
    flex: 1,
    borderRadius: 6,
    minHeight: 40,
    justifyContent: 'center',
  },
  floating: {
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  inline: {
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    marginVertical: 5,
  },
  'inline-one-fifth-wide': {
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    marginVertical: 5,
    width: width / 5,
  },
  section: {
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    padding: 5,
    marginVertical: 5,
  },
  'tab-gray': {
    borderColor: colors.lavenderGray,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.28,
  },
  'tab-blue': {
    backgroundColor: colors.steelBlue,
    borderColor: colors.steelBlue,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.28,
  },
});

export type ButtonStyleName = keyof typeof buttonStyle;
