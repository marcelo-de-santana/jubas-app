import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colorRegistry} from '@styles';

export const defaultOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colorRegistry['lightGray'],
  },
  headerTintColor: colorRegistry['steelBlue'],
  headerTitleAlign: 'center',
  statusBarColor: colorRegistry['lightGray'],
  statusBarStyle: 'dark',
  fullScreenGestureEnabled: true,
};
