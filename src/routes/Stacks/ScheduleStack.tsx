import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from '../screenOptions';
import {
  ScheduleEmployeesScreen,
  ScheduleHomeScreen,
  ScheduleListScreen,
  ScheduleSpecialtiesScreen,
} from '@screens';
import {SpecialtyResponse} from '@domain';

export type ScheduleStackParamList = {
  ScheduleHomeScreen: undefined;
  ScheduleListScreen: undefined;
  ScheduleSpecialtiesScreen: undefined;
  ScheduleEmployeesScreen: {specialty: SpecialtyResponse};
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
        name="ScheduleSpecialtiesScreen"
        component={ScheduleSpecialtiesScreen}
      />
    </NativeStack.Navigator>
  );
}
