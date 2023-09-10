import {StyleSheet} from 'react-native';

export const menu = StyleSheet.create({
  boxMenu: {
    borderColor: '#CCCED9',
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: '1%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    width: '32%',
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
    borderColor: '#CCCED9',
    borderRadius: 6,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: '32%',
  },
  boxMenuTabBlue: {
    backgroundColor: '#3C4659',
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    width: '32%',
    marginBottom: 5,
  },
  boxFlexRowMb: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
