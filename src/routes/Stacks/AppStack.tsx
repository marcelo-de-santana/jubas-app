import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, UnderConstruction} from '@screens';
import {UserStack} from './UserStack';
import {EmployeeStack} from './EmployeeStack';
import {colorRegistry} from '@styles';
import {BusinessManagementStack} from './BusinessManagementStack';

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
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: colorRegistry['light-gray'],
        },
        headerTintColor: colorRegistry['steel-blue'],
        headerTitleAlign: 'center',
        statusBarColor: colorRegistry['light-gray'],
        statusBarStyle: 'dark',
      }}>
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
