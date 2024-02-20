import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions} from '../screenOptions';
import {ScheduleHomeScreen, ScheduleListScreen} from '@screens';

export type ScheduleStackParamList = {
  ScheduleHomeScreen: undefined;
  ScheduleListScreen: undefined;
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
        name="ScheduleListScreen"
        component={ScheduleListScreen}
      />
    </NativeStack.Navigator>
  );
}
