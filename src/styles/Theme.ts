import {StyleSheet} from 'react-native';
import {colorRegistry} from './Colors';

// export const theme = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#F2F2F2',
//   },
//   containerJustifyCenter: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   boxHeader: {
//     marginBottom: 10,
//   },
//   horizontalMargins: {*
//     paddingHorizontal: 20,
//     flex: 1,
//   },
//   logo: {
//     backgroundColor: '#CCCED9',
//     borderRadius: 4,
//     marginTop: 20,
//     height: 150,
//     width: 120,
//   },
//   blueBox: {
//     backgroundColor: '#9BA7BF',
//     borderRadius: 10,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 12,
//   },
//   boxItems: {
//     minHeight: 50,
//     marginHorizontal: 10,
//     justifyContent: 'center',
//   },
//   boxItemsPT: {
//     minHeight: 50,
//     marginHorizontal: 10,
//     paddingTop: 10,
//     justifyContent: 'center',
//   },
//   boxItemsFlexRow: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 10,
//   },
//   boxFlexRowList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginVertical: 5,
//   },
//   boxFlexRowListGrey: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderRadius: 6,
//     backgroundColor: '#CCCED9',
//     marginVertical: 5,
//   },
//   blueBoxItems: {
//     backgroundColor: '#9BA7BF',
//     borderRadius: 6,
//     marginVertical: 5,
//     padding: 10,
//   },
//   whiteBoxItems: {
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     marginVertical: 5,
//     padding: 10,
//   },
//   greyBox: {
//     backgroundColor: '#CCCED9',
//     borderRadius: 6,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//     padding: 10,
//   },
//   greyBoxItems: {
//     backgroundColor: '#CCCED9',
//     borderRadius: 6,
//     marginVertical: 5,
//     padding: 10,
//   },
//   greyBoxItemsFlex: {
//     backgroundColor: '#CCCED9',
//     borderRadius: 6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//     padding: 10,
//   },
//   footerBox: {
//     paddingBottom: 10,
//   },
//   scrollInfo: {
//     textAlign: 'center',
//     color: '#3c4659',
//     marginBottom: 10,
//   },
//   cart: {
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//   },
//   boxFlexRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   boxFlexRowSwitch: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//   },
//   boxFooter: {
//     flex: 1,
//     marginVertical: 20,
//   },
//   footerBottom: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   label: {
//     color: '#161c26',
//     paddingTop: 5,
//   },
//   footerLine: {
//     borderBottomWidth: 0.5,
//     borderColor: '#CCCED9',
//   },
// });

export const theme = StyleSheet.create({
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
    borderRadius: 6,
    padding: 10,
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

export type ThemeName = keyof typeof theme;
