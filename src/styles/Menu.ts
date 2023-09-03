import {StyleSheet} from 'react-native';

export const menu = StyleSheet.create({
  boxMenu: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    height: 110,
    justifyContent: 'center',
    margin: 1.5,
    padding: 10,
    width: 110,
  },
  textMenuBlack: {
    color: '#161C26',
    textAlign: 'center',
  },
  textMenuWhite: {
    color: '#fff',
    textAlign: 'center',
  },
  boxMenuTabGrey: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: 110,
  },
  boxMenuTabBlue: {
    backgroundColor: '#3C4659',
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: 110,
  },
  boxFlexRowMb: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
