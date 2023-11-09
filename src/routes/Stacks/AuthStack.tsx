import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen, RecoveryPasswordScreen} from '@screens';
import {defaultOptions} from '../Types/screenOptions';

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  RecoveryPasswordScreen: undefined;
};

const NativeStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <NativeStack.Navigator
      screenOptions={defaultOptions}
      initialRouteName="SignInScreen">
      <NativeStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <NativeStack.Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
        options={{headerTitle: 'Recuperar Senha'}}
      />
      <NativeStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerTitle: 'Cadastre-se'}}
      />
    </NativeStack.Navigator>
  );
}
