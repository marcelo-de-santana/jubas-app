import {
  CategoryResponse,
  EmployeeResponse,
  SpecialtyResponse,
  WorkingHourResponse,
} from '@domain';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppointmentListScreen,
  CategoryCreateScreen,
  CategoryDeleteScreen,
  CategoryListScreen,
  CategoryUpdateScreen,
  DashboardScreen,
  EmployeeCreateScreen,
  EmployeeListScreen,
  EmployeeSpecialtiesScreen,
  EmployeeWorkingHourScreen,
  SpecialtyCreateScreen,
  SpecialtyDeleteScreen,
  SpecialtyUpdateScreen,
  WorkingHourCreateScreen,
  WorkingHourListScreen,
  WorkingHourUpdateScreen,
} from '@screens';
import {defaultOptions} from '../screenOptions';
import {
  NavigationToCategoryCreate,
  NavigationToEmployeeCreate,
  NavigationToWorkingHourCreate,
} from '@components';

interface CategoryParams {
  category: CategoryResponse;
}

interface SpecialtyParams {
  category: CategoryResponse;
  specialty: SpecialtyResponse;
}

export type BusinessManagementParamList = {
  AppointmentListScreen: undefined;
  CategoryCreateScreen: undefined;
  CategoryDeleteScreen: CategoryParams;
  CategoryListScreen: undefined;
  CategoryUpdateScreen: CategoryParams;
  DashboardScreen: undefined;
  EmployeeCreateScreen: undefined;
  EmployeeListScreen: undefined;
  EmployeeUpdateScreen: undefined;
  EmployeeSpecialtiesScreen: {employee: EmployeeResponse};
  EmployeeWorkingHourScreen?: {workingHourId: string};
  SpecialtyCreateScreen: CategoryParams;
  SpecialtyDeleteScreen: SpecialtyParams;
  SpecialtyUpdateScreen: SpecialtyParams;
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
        options={{headerTitle: 'Agenda'}}
      />
      <NativeStack.Screen
        name="CategoryCreateScreen"
        component={CategoryCreateScreen}
        options={{headerTitle: 'Nova categoria'}}
      />
      <NativeStack.Screen
        name="CategoryDeleteScreen"
        component={CategoryDeleteScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
      <NativeStack.Screen
        name="CategoryListScreen"
        component={CategoryListScreen}
        options={{
          headerTitle: 'Categorias',
          headerRight: NavigationToCategoryCreate,
        }}
      />
      <NativeStack.Screen
        name="CategoryUpdateScreen"
        component={CategoryUpdateScreen}
        options={{headerTitle: 'Atualizar categoria'}}
      />
      <NativeStack.Screen
        name="EmployeeCreateScreen"
        component={EmployeeCreateScreen}
        options={{
          headerTitle: 'Novo funcionário',
        }}
      />
      <NativeStack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={{
          headerTitle: 'Funcionários',
          headerRight: NavigationToEmployeeCreate,
        }}
      />
      <NativeStack.Screen
        name="EmployeeSpecialtiesScreen"
        component={EmployeeSpecialtiesScreen}
        options={{headerTitle: 'Especialidades'}}
      />
      <NativeStack.Screen
        name="EmployeeWorkingHourScreen"
        component={EmployeeWorkingHourScreen}
        options={{headerTitle: 'Jornada de trabalho'}}
      />
      <NativeStack.Screen
        name="SpecialtyCreateScreen"
        component={SpecialtyCreateScreen}
        options={{headerTitle: 'Nova especialidade'}}
      />
      <NativeStack.Screen
        name="SpecialtyDeleteScreen"
        component={SpecialtyDeleteScreen}
        options={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      />
      <NativeStack.Screen
        name="SpecialtyUpdateScreen"
        component={SpecialtyUpdateScreen}
        options={{
          headerTitle: 'Atualizar especialidade',
        }}
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
          headerRight: NavigationToWorkingHourCreate,
        }}
      />
      <NativeStack.Screen
        name="WorkingHourUpdateScreen"
        component={WorkingHourUpdateScreen}
        options={{
          headerTitle: 'Atualizar horário',
        }}
      />
    </NativeStack.Navigator>
  );
}
