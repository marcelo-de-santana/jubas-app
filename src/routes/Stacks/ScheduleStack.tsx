import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from '../screenOptions';
import {
  ScheduleEmployeesScreen,
  ScheduleHomeScreen,
  ScheduleProfilesScreen,
  ScheduleResumeScreen,
} from '@screens';
import {ProfileResponse, SpecialtyResponse} from '@domain';

interface ScheduleRouteParams {
  specialty: SpecialtyResponse;
  employee: Pick<ProfileResponse, 'id' | 'name'>;
  profile: Pick<ProfileResponse, 'id' | 'name'>;
  hour: string;
}

export type ScheduleStackParamList = {
  ScheduleHomeScreen: undefined;
  ScheduleEmployeesScreen: Pick<ScheduleRouteParams, 'specialty'>;
  ScheduleProfilesScreen: Omit<ScheduleRouteParams, 'profile'>;
  ScheduleResumeScreen: ScheduleRouteParams;
};

export function ScheduleStack() {
  const NativeStack = createNativeStackNavigator<ScheduleStackParamList>();

  return (
    <NativeStack.Navigator
      screenOptions={{
        ...defaultOptions,
        headerShown: true,
        headerTitle: 'Agenda',
        animation: 'none',
      }}
      initialRouteName="ScheduleHomeScreen">
      <NativeStack.Screen
        name="ScheduleHomeScreen"
        component={ScheduleHomeScreen}
      />
      <NativeStack.Screen
        name="ScheduleEmployeesScreen"
        component={ScheduleEmployeesScreen}
      />
      <NativeStack.Screen
        name="ScheduleProfilesScreen"
        component={ScheduleProfilesScreen}
      />
      <NativeStack.Screen
        name="ScheduleResumeScreen"
        component={ScheduleResumeScreen}
      />
    </NativeStack.Navigator>
  );
}
