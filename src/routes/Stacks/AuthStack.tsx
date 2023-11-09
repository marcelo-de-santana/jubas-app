import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen, RecoveryPasswordScreen} from '@screens';
import {defaultThemeOptions} from '@styles';

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
      screenOptions={defaultThemeOptions}
      initialRouteName="SignInScreen">
      <NativeStack.Screen name="SignInScreen" component={SignInScreen} />
      <NativeStack.Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
        options={{headerShown: true, headerTitle: 'Recuperar Senha'}}
      />
      <NativeStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: true, headerTitle: 'Cadastre-se'}}
      />
    </NativeStack.Navigator>
  );
}
