import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashboardScreen,
  DaysOfAttendanceScreen,
  MonthlyScheduleScreen,
  UnderConstruction,
  WeeklyScheduleScreen,
} from '@screens';
import {defaultOptions} from '../../screenOptions';
import {EmployeeStack} from '../EmployeeStack/EmployeeStack';
import {CatalogStack} from '../CatalogStack/CatalogStack';
import {WorkingHourStack} from '../WorkingHourStack/WorkingHourStack';
import {UserStack} from '../UserStack/UserStack';
import {AppointmentStack} from '../AppointmentStack/AppointmentStack';

export type AdminParamList = {
  AppointmentStack: undefined;
  DaysOfAttendanceScreen: undefined;
  WeeklyScheduleScreen: undefined;
  MonthlyScheduleScreen: undefined;
  CatalogStack: undefined;
  DashboardScreen: undefined;
  EmployeeStack: undefined;
  WorkingHourStack: undefined;
  UserStack: undefined;
  UnderConstruction: undefined;

  // TODO: FAZER LISTAGEM DE PAGAMENTOS
  PaymentsScreen: undefined;
};

export function AdminStack() {
  const NativeStack = createNativeStackNavigator<AdminParamList>();

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
        name="AppointmentStack"
        component={AppointmentStack}
      />
      <NativeStack.Screen
        name="DaysOfAttendanceScreen"
        component={DaysOfAttendanceScreen}
        options={{headerShown: true, headerTitle: ''}}
      />
      <NativeStack.Screen
        name="WeeklyScheduleScreen"
        component={WeeklyScheduleScreen}
        options={{headerShown: true, headerTitle: 'Tamanho da agenda'}}
      />
      <NativeStack.Screen
        name="MonthlyScheduleScreen"
        component={MonthlyScheduleScreen}
        options={{headerShown: true, headerTitle: 'Dias sem atendimento'}}
      />
      <NativeStack.Screen name="EmployeeStack" component={EmployeeStack} />
      <NativeStack.Screen name="CatalogStack" component={CatalogStack} />
      <NativeStack.Screen
        name="WorkingHourStack"
        component={WorkingHourStack}
      />
      <NativeStack.Screen name="UserStack" component={UserStack} />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
      />
    </NativeStack.Navigator>
  );
}
