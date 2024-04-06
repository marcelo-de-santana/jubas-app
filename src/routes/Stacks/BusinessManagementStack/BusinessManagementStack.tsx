import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, AppointmentListScreen} from '@screens';
import {defaultOptions} from '../../screenOptions';
import {EmployeeStack} from '../EmployeeStack/EmployeeStack';
import {CatalogStack} from '../CatalogStack/CatalogStack';
import {WorkingHourStack} from '../WorkingHourStack/WorkingHourStack';
import {UserStack} from '../UserStack/UserStack';

export type BusinessManagementParamList = {
  AppointmentListScreen: undefined;
  CatalogStack: undefined;
  DashboardScreen: undefined;
  EmployeeStack: undefined;
  WorkingHourStack: undefined;
  UserStack: undefined;
};

export function BusinessManagementStack() {
  const NativeStack = createNativeStackNavigator<BusinessManagementParamList>();

  return (
    <NativeStack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{...defaultOptions, headerShown: false}}>
      <NativeStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          ...defaultOptions,
          headerTitle: 'Dashboard',
          headerShown: true,
          animation: 'none',
        }}
      />
      <NativeStack.Screen
        name="AppointmentListScreen"
        component={AppointmentListScreen}
        options={{headerTitle: 'Agenda', headerShown: true}}
      />
      <NativeStack.Screen name="EmployeeStack" component={EmployeeStack} />
      <NativeStack.Screen name="CatalogStack" component={CatalogStack} />
      <NativeStack.Screen
        name="WorkingHourStack"
        component={WorkingHourStack}
      />
      <NativeStack.Screen name="UserStack" component={UserStack} />
    </NativeStack.Navigator>
  );
}
