import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, UnderConstruction} from '@screens';
import {ScheduleStack} from './ScheduleStack';
import {UserStack} from './UserStack';
import {BusinessManagementStack} from './BusinessManagementStack';
import {defaultOptions} from '../screenOptions';

export type AppStackParamList = {
  BusinessManagementStack: undefined;
  HomeScreen: undefined;
  UnderConstruction: undefined;
  ScheduleStack: undefined;
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
