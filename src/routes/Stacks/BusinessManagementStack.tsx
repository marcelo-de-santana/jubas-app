import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, WorkingHoursCreateScreen} from '@screens';
import {colorRegistry} from '@styles';

export type BusinessManagementParamList = {
  DashboardScreen: undefined;
  WorkingHoursCreateScreen: undefined;
};

export function BusinessManagementStack() {
  const NativeStack = createNativeStackNavigator<BusinessManagementParamList>();

  return (
    <NativeStack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: colorRegistry['light-gray'],
        },
        headerTintColor: colorRegistry['steel-blue'],
        headerTitleAlign: 'center',
      }}>
      <NativeStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: true}}
      />
      <NativeStack.Screen
        name="WorkingHoursCreateScreen"
        component={WorkingHoursCreateScreen}
        options={{presentation: 'transparentModal'}}
      />
    </NativeStack.Navigator>
  );
}
