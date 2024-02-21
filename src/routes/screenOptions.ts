import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {theme} from '@styles';

export const defaultOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
  headerTintColor: theme.colors.fontPrimary,
  headerTitleAlign: 'center',
  statusBarColor: theme.colors.backgroundPrimary,
  statusBarStyle: 'auto',
  fullScreenGestureEnabled: true,
};
