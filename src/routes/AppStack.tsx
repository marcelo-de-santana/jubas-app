import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, UnderConstruction} from '@screens';
import {UserStack} from './UserStack';
import {EmployeeStack} from './EmployeeStack';
import {BusinessManagementStack} from './BusinessManagementStack';
import {defaultOptions} from './screenOptions';

export type AppStackParamList = {
  BusinessManagementStack: undefined;
  EmployeeStack: undefined;
  HomeScreen: undefined;
  UnderConstruction: undefined;
  UserStack: undefined;
  // MyAccount: undefined;
  // ScheduleManagement: undefined;
  // ServiceBookScreens: undefined;
  // ServiceCatalogScreens: undefined;
};

const NativeStack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <NativeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{...defaultOptions, headerShown: false}}>
      <NativeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Jubas Barber',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="BusinessManagementStack"
        component={BusinessManagementStack}
      />
      <NativeStack.Screen name="EmployeeStack" component={EmployeeStack} />
      <NativeStack.Screen name="UserStack" component={UserStack} />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
      />
    </NativeStack.Navigator>
  );
}
