import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  SignUpScreen,
  RecoveryPasswordScreen,
} from '@screens';

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type AuthStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  RecoveryPasswordScreen: undefined;
};

const NativeStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3C4659',
        },
        headerTintColor: '#fff',
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <NativeStack.Screen name="LoginScreen" component={LoginScreen} />
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