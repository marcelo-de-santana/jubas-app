import {
  CategoryResponse,
  SpecialtyResponse,
  WorkingHourResponse,
} from '@domain';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppointmentListScreen,
  CategoryCreateScreen,
  CategoryListScreen,
  CategoryUpdateScreen,
  DashboardScreen,
  SpecialtyCreateScreen,
  SpecialtyUpdateScreen,
  WorkingHourCreateScreen,
  WorkingHourListScreen,
  WorkingHourUpdateScreen,
} from '@screens';
import {defaultOptions} from '../screenOptions';

interface SpecialtyUpdateParams {
  category: CategoryResponse;
  specialty: SpecialtyResponse;
}

export type BusinessManagementParamList = {
  AppointmentListScreen: undefined;
  CategoryCreateScreen: undefined;
  CategoryListScreen: undefined;
  CategoryUpdateScreen: {category: CategoryResponse};
  DashboardScreen: undefined;
  SpecialtyCreateScreen: {category: CategoryResponse};
  SpecialtyUpdateScreen: SpecialtyUpdateParams;
  WorkingHourCreateScreen: undefined;
  WorkingHourListScreen: undefined;
  WorkingHourUpdateScreen: {workingHour: WorkingHourResponse};
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
          animation: 'none',
        }}
      />
      <NativeStack.Screen
        name="AppointmentListScreen"
        component={AppointmentListScreen}
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
        name="SpecialtyUpdateScreen"
        component={SpecialtyUpdateScreen}
        options={{}}
      />
      <NativeStack.Screen
        name="WorkingHourCreateScreen"
        component={WorkingHourCreateScreen}
        options={{headerTitle: 'Novo horário'}}
      />
      <NativeStack.Screen
        name="WorkingHourListScreen"
        component={WorkingHourListScreen}
        options={{
          headerTitle: 'Horários',
        }}
      />
      <NativeStack.Screen
        name="WorkingHourUpdateScreen"
        component={WorkingHourUpdateScreen}
        options={{
          headerTitle: 'Horários',
        }}
      />
    </NativeStack.Navigator>
  );
}
