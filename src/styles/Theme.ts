import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StyleSheet, ViewStyle} from 'react-native';

export const themeRegistry = StyleSheet.create({
  boxFlexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxFlexRowList: {
    borderRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  boxItems: {
    minHeight: 50,
  },
  boxItemsHeader: {
    minHeight: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: 10,
  },
  lineItems: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
    paddingHorizontal: 10,
  },
});

export type ThemeName = keyof typeof themeRegistry;

export function flatListStyle(data: any = []): ViewStyle {
  return {
    flex: data?.length === 0 ? 1 : undefined,
  };
}
