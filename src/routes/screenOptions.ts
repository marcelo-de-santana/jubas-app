import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '@styles';

export const defaultOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colors['lightGray'],
  },
  headerTintColor: colors['steelBlue'],
  headerTitleAlign: 'center',
  statusBarColor: colors['lightGray'],
  statusBarStyle: 'dark',
  fullScreenGestureEnabled: true,
};
