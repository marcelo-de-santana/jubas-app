import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  SignInScreen,
  HomeScreen,
  SignUpScreen,
  RecoveryPasswordScreen,
} from '@screens';
import {colorRegistry} from '@styles';

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type AuthStackParamList = {
  HomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  RecoveryPasswordScreen: undefined;
};

const NativeStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: colorRegistry['light-gray'],
        },
        headerTintColor: colorRegistry['steel-blue'],
        headerTitleAlign: 'center',
        statusBarColor: colorRegistry['light-gray'],
        statusBarStyle: 'dark',
      }}
      initialRouteName="SignInScreen">
      <NativeStack.Screen name="SignInScreen" component={SignInScreen} />
      <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
      <NativeStack.Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
      />
      <NativeStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: true, headerTitle: 'Cadastre-se'}}
      />
    </NativeStack.Navigator>
  );
}
