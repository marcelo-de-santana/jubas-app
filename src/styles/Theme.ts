import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },
  containerJustifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  boxHeader: {
    marginBottom: 10,
  },
  horizontalMargins: {
    paddingHorizontal: 20,
    flex: 1,
  },
  logo: {
    backgroundColor: '#CCCED9',
    borderRadius: 4,
    marginTop: 20,
    height: 150,
    width: 120,
  },
  boxMenu: {
    backgroundColor: '#9BA7BF',
    borderRadius: 6,
    height: 60,
    justifyContent: 'center',
    margin: 5,
    width: '45%',
  },
  blueBox: {
    backgroundColor: '#9BA7BF',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
  },
  blueBoxItems: {
    backgroundColor: '#9BA7BF',
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
  },
  whiteBoxItems: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
  },
  greyBox: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
  },
  greyBoxItems: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    marginVertical: 5,
    padding: 10,
  },
  greyBoxItemsFlex: {
    backgroundColor: '#CCCED9',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
  },
  footerBox: {
    paddingBottom: 10,
  },
  scrollInfo: {
    textAlign: 'center',
    color: '#3c4659',
    marginBottom: 10,
  },
  cart: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  boxFlexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxFlexRowSwitch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  boxFooter: {
    flex: 1,
    marginVertical: 20,
  },
  footerBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  label: {
    color: '#161c26',
    paddingTop: 5,
  },
});
