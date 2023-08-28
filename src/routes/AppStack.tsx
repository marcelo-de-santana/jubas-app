import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {HomeScreen, UsersScreen} from '@screens';
import {EmployeeScreen} from '@screens';

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type AppStackParamList = {
  EmployeeScreen: undefined;
  HomeScreen: undefined;
  MyAccount: undefined;
  ScheduleManagement: undefined;
  ServiceBookScreens: undefined;
  ServiceCatalogScreens: undefined;
  UsersScreens: undefined;
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
      <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
      <NativeStack.Screen
        name="EmployeeScreen"
        component={EmployeeScreen}
        options={{title: 'Barbeiros', headerShown: true}}
      />
      <NativeStack.Screen
        name="UsersScreens"
        component={UsersScreen}
        options={{title: 'Usuários', headerShown: true}}
      />
    </NativeStack.Navigator>
  );
}
