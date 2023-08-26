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
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#3C4659',
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
      <NativeStack.Screen name="EmployeeScreen" component={EmployeeScreen} />
      <NativeStack.Screen
        name="UsersScreens"
        component={UsersScreen}
        options={{title: 'Usuários', headerShown: true}}
      />
    </NativeStack.Navigator>
  );
}
