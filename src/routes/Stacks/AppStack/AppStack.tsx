import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  MyAccountScreen,
  MyAttendancesScreen,
  MyFeedbackScreen,
  UnderConstruction,
} from '@screens';
import {ScheduleStack} from '../ScheduleStack/ScheduleStack';
import {UserStack} from '../UserStack/UserStack';
import {BusinessManagementStack} from '../BusinessManagementStack/BusinessManagementStack';
import {defaultOptions} from '../../screenOptions';
import {UserResponse} from '@domain';

export type AppStackParamList = {
  BusinessManagementStack: undefined;
  HomeScreen: undefined;
  UnderConstruction: undefined;
  ScheduleStack: undefined;
  UserStack: undefined;
  MyAccountScreen: {user: UserResponse};
  MyAttendancesScreen: {userId: string};
  MyFeedbackScreen: {appointmentId: string; status: string};
};

const NativeStack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
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
          title: 'Feedback',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen name="ScheduleStack" component={ScheduleStack} />
      <NativeStack.Screen
        name="BusinessManagementStack"
        component={BusinessManagementStack}
      />
      <NativeStack.Screen name="UserStack" component={UserStack} />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
      />
    </NativeStack.Navigator>
  );
}
