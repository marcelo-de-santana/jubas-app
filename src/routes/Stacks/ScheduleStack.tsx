import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from '../screenOptions';
import {
  ScheduleEmployeesScreen,
  ScheduleHomeScreen,
  ScheduleListScreen,
  ScheduleProfilesScreen,
  ScheduleSpecialtiesScreen,
} from '@screens';
import {IPerson, SpecialtyResponse} from '@domain';

export type ScheduleStackParamList = {
  ScheduleHomeScreen: undefined;
  ScheduleListScreen: undefined;
  ScheduleSpecialtiesScreen: undefined;
  ScheduleEmployeesScreen: {specialty: SpecialtyResponse};
  ScheduleProfilesScreen: {
    specialty: SpecialtyResponse;
    employee: IPerson;
    hour: string;
  };
};

export function ScheduleStack() {
  const NativeStack = createNativeStackNavigator<ScheduleStackParamList>();

  return (
    <NativeStack.Navigator
      screenOptions={{...defaultOptions, headerShown: true}}
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
        name="ScheduleListScreen"
        component={ScheduleListScreen}
      />
      <NativeStack.Screen
        name="ScheduleProfilesScreen"
        component={ScheduleProfilesScreen}
      />
      <NativeStack.Screen
        name="ScheduleSpecialtiesScreen"
        component={ScheduleSpecialtiesScreen}
      />
    </NativeStack.Navigator>
  );
}
