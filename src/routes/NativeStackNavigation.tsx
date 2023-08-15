import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackParamList} from './typesRoute/TypeNativeStack';
import {
  LoginScreen,
  HomeScreen,
  SignUpScreen,
  RecoveryPasswordScreen,
} from '@screens';

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

export function NativeStackNavigation() {
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
