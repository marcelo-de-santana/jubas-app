import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  MyAccountScreen,
  MyAttendancesScreen,
  MyFeedbackScreen,
  PaymentScreen,
  PaymentSuccess,
  UnderConstruction,
} from '@screens';
import {ScheduleStack} from '../ScheduleStack/ScheduleStack';
import {UserStack} from '../UserStack/UserStack';
import {defaultOptions} from '../../screenOptions';
import {UserResponse} from '@domain';

export type ClientStackParamList = {
  HomeScreen: undefined;
  UnderConstruction: undefined;
  ScheduleStack: undefined;
  UserStack: undefined;
  MyAccountScreen: {user: UserResponse};
  MyAttendancesScreen: {userId: string};
  MyFeedbackScreen: {appointmentId: string; status: string};
  PaymentScreen: {appointmentId: string};
  PaymentSuccess: {transactionId: string};
};

const NativeStack = createNativeStackNavigator<ClientStackParamList>();

export function ClientStack() {
  return (
    <NativeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        ...defaultOptions,
        headerShown: false,
      }}>
      <NativeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Jubas Barber',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          title: 'Minha conta',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="MyAttendancesScreen"
        component={MyAttendancesScreen}
        options={{
          title: 'Meus atendimentos',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="MyFeedbackScreen"
        component={MyFeedbackScreen}
        options={{
          title: 'Avaliar atendimento',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: 'Pagamento',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <NativeStack.Screen name="ScheduleStack" component={ScheduleStack} />
      <NativeStack.Screen name="UserStack" component={UserStack} />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
      />
    </NativeStack.Navigator>
  );
}
