import {StyleSheet} from 'react-native';

export const button = StyleSheet.create({
  activeButton: {
    backgroundColor: '#3C4659',
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
    width: '30%',
  },
  blueButton: {
    backgroundColor: '#3c4659',
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  inactiveButton: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
    width: '30%',
  },
  redButton: {
    backgroundColor: 'red',
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  whiteButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#9BA7BF',
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  switchButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  switchButtonSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  send: {
    flex: 1,
    borderRadius: 6,
    padding: 5,
    justifyContent: 'center',
  },
});

export const buttonRegistry = StyleSheet.create({
  active: {
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
    width: '30%',
  },
  send: {
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  'send-flex': {
    flex: 1,
    borderRadius: 6,
    padding: 5,
    justifyContent: 'center',
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
  small: {
    padding: 5,
    borderRadius: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  'square-right': {
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  'square-inline': {
    justifyContent: 'center',
    width: '20%',
    borderRadius: 6,
    minHeight: 40,
  },
});

type buttonType = typeof buttonRegistry;
export type ButtonName = keyof buttonType;
