import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  HomeScreen,
  UnderConstruction,
  UserDetailsScreen,
  UsersScreen,
} from '@screens';
import {EmployeeScreen} from '@screens';

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type AppStackParamList = {
  EmployeeScreen: undefined;
  HomeScreen: undefined;
  MyAccount: undefined;
  ScheduleManagement: undefined;
  ServiceBookScreens: undefined;
  ServiceCatalogScreens: undefined;
  UnderConstruction: undefined;
  UsersScreen: undefined;
  UserDetailsScreen: undefined;
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
      <NativeStack.Screen
        name="EmployeeScreen"
        component={EmployeeScreen}
        options={{title: 'Barbeiros', headerShown: true}}
      />
      <NativeStack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{title: 'Usuários', headerShown: true}}
      />
      <NativeStack.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        options={{title: 'Detalhes', headerShown: true}}
      />
      <NativeStack.Screen
        name="UnderConstruction"
        component={UnderConstruction}
      />
    </NativeStack.Navigator>
  );
}
