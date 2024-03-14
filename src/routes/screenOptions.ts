import {useAppTheme} from '@hooks';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
const theme = useAppTheme();

export const defaultOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.primaryContrast,
  headerTitleAlign: 'center',
  statusBarColor: theme.colors.primary,
  statusBarStyle: 'auto',
  fullScreenGestureEnabled: true,
};
