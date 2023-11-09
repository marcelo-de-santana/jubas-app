import {CategoryResponse} from '@domain';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CategoryCreateScreen,
  CategoryListScreen,
  CategoryUpdateScreen,
  DashboardScreen,
  SpecialtyCreateScreen,
  SpecialtyListScreen,
  WorkingHoursCreateScreen,
  WorkingHoursListScreen,
} from '@screens';
import {defaultOptions} from '../Types/screenOptions';

export type BusinessManagementParamList = {
  CategoryCreateScreen: undefined;
  CategoryListScreen: undefined;
  CategoryUpdateScreen: {category: CategoryResponse};
  DashboardScreen: undefined;
  SpecialtyCreateScreen: undefined;
  SpecialtyListScreen: undefined;
  WorkingHoursCreateScreen: undefined;
  WorkingHoursListScreen: undefined;
};

export function BusinessManagementStack() {
  const NativeStack = createNativeStackNavigator<BusinessManagementParamList>();

  return (
    <NativeStack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={defaultOptions}>
      <NativeStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: true, headerTitle: 'Dashboard'}}
      />
      <NativeStack.Screen
        name="CategoryCreateScreen"
        component={CategoryCreateScreen}
        options={{
          presentation: 'transparentModal',
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
        name="CategoryUpdateScreen"
        component={CategoryUpdateScreen}
      />
      <NativeStack.Screen
        name="SpecialtyCreateScreen"
        component={SpecialtyCreateScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="SpecialtyListScreen"
        component={SpecialtyListScreen}
        options={{headerShown: true, headerTitle: 'Especialidades'}}
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
