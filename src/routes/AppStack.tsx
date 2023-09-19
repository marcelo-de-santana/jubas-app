import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, UnderConstruction} from '@screens';
import {UserStack} from './UserStack';
import {EmployeeStack} from './EmployeeStack';

export type AppStackParamList = {
  EmployeeStack: undefined;
  HomeScreen: undefined;
  MyAccount: undefined;
  ScheduleManagement: undefined;
  ServiceBookScreens: undefined;
  ServiceCatalogScreens: undefined;
  UnderConstruction: undefined;
  UserStack: undefined;
};

const NativeStack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#3C4659',
        headerTitleAlign: 'center',
      }}
      initialRouteName="HomeScreen">
      <NativeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Jubas Barber', headerShown: true}}
      />
      <NativeStack.Screen name="EmployeeStack" component={EmployeeStack} />
      <NativeStack.Screen name="UserStack" component={UserStack} />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
        options={{animation: 'fade_from_bottom'}}
      />
    </NativeStack.Navigator>
  );
}
