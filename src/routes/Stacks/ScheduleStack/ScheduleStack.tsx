import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from '../../screenOptions';
import {
  ScheduleDaysScreen,
  ScheduleHomeScreen,
  ScheduleProfileCreateScreen,
  ScheduleProfilesScreen,
  ScheduleResumeScreen,
} from '@screens';
import {ProfileResponse, SpecialtyResponse} from '@domain';

export interface ScheduleRouteParams {
  specialty: SpecialtyResponse;
  employee: Pick<ProfileResponse, 'id' | 'name'>;
  profile: Pick<ProfileResponse, 'id' | 'name'>;
  day: string;
  time: string;
}

export type ScheduleStackParamList = {
  ScheduleHomeScreen: undefined;
  ScheduleDaysScreen: Pick<ScheduleRouteParams, 'specialty'>;
  ScheduleProfilesScreen: Omit<ScheduleRouteParams, 'profile'>;
  ScheduleResumeScreen: ScheduleRouteParams;
  ScheduleProfileCreateScreen: undefined;
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
        name="ScheduleDaysScreen"
        component={ScheduleDaysScreen}
      />
      <NativeStack.Screen
        name="ScheduleProfilesScreen"
        component={ScheduleProfilesScreen}
      />
      <NativeStack.Screen
        name="ScheduleProfileCreateScreen"
        component={ScheduleProfileCreateScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
      <NativeStack.Screen
        name="ScheduleResumeScreen"
        component={ScheduleResumeScreen}
      />
    </NativeStack.Navigator>
  );
}
