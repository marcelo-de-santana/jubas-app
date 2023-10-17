import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CategoryCreateScreen,
  CategoryListScreen,
  DashboardScreen,
  WorkingHoursCreateScreen,
  WorkingHoursListScreen,
} from '@screens';
import {colorRegistry} from '@styles';

export type BusinessManagementParamList = {
  CategoryCreateScreen: undefined;
  CategoryListScreen: undefined;
  DashboardScreen: undefined;
  WorkingHoursCreateScreen: undefined;
  WorkingHoursListScreen: undefined;
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
        options={{headerShown: true, headerTitle: 'Dashboard'}}
      />
      <NativeStack.Screen
        name="CategoryCreateScreen"
        component={CategoryCreateScreen}
        options={{
          headerShown: true,
          headerTitle: 'Categorias',
        }}
      />
      <NativeStack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Categorias',
        }}
      />
      <NativeStack.Screen
        name="WorkingHoursCreateScreen"
        component={WorkingHoursCreateScreen}
        options={{presentation: 'transparentModal'}}
      />
      <NativeStack.Screen
        name="WorkingHoursListScreen"
        component={WorkingHoursListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Horários',
        }}
      />
    </NativeStack.Navigator>
  );
}
