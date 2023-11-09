import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colorRegistry} from '@styles';

export const defaultOptions: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
  headerShadowVisible: false,
  headerShown: true,
  headerStyle: {
    backgroundColor: colorRegistry['light-gray'],
  },
  headerTintColor: colorRegistry['steel-blue'],
  headerTitleAlign: 'center',
  statusBarColor: colorRegistry['light-gray'],
  statusBarStyle: 'dark',
  fullScreenGestureEnabled: true,
};
