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
    borderColor:'#9BA7BF',
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
});
