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
import {defaultOptions} from '../screenOptions';

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
        options={{
          ...defaultOptions,
          headerTitle: 'Dashboard',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="CategoryCreateScreen"
        component={CategoryCreateScreen}
        options={{}}
      />
      <NativeStack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{
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
        options={{}}
      />
      <NativeStack.Screen
        name="SpecialtyListScreen"
        component={SpecialtyListScreen}
        options={{headerTitle: 'Especialidades'}}
      />
      <NativeStack.Screen
        name="WorkingHoursCreateScreen"
        component={WorkingHoursCreateScreen}
        options={{headerTitle: 'Novo horário'}}
      />
      <NativeStack.Screen
        name="WorkingHoursListScreen"
        component={WorkingHoursListScreen}
        options={{
          headerTitle: 'Horários',
        }}
      />
    </NativeStack.Navigator>
  );
}
