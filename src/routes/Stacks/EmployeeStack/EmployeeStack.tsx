import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeCreateScreen,
  EmployeeListScreen,
  EmployeeSpecialtiesConfirmScreen,
  EmployeeSpecialtiesScreen,
  EmployeeWorkingHourScreen,
} from '@screens';
import {EmployeeResponse, SpecialtyResponse} from '@domain';
import {defaultOptions} from '../../screenOptions';

export type EmployeeStackParamList = {
  EmployeeCreateScreen: undefined;
  EmployeeListScreen: undefined;
  EmployeeUpdateScreen: undefined;
  EmployeeSpecialtiesScreen: {employee: EmployeeResponse};
  EmployeeSpecialtiesConfirmScreen: {
    employee: EmployeeResponse;
    assignedSpecialties: SpecialtyResponse[];
  };
  EmployeeWorkingHourScreen: {employeeId: string; workingHourId?: string};
};

export function EmployeeStack() {
  const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

  return (
    <NativeStack.Navigator
      initialRouteName="EmployeeListScreen"
      screenOptions={defaultOptions}>
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
        }}
      />
      <NativeStack.Screen
        name="EmployeeSpecialtiesScreen"
        component={EmployeeSpecialtiesScreen}
        options={{headerTitle: 'Especialidades'}}
      />
      <NativeStack.Screen
        name="EmployeeSpecialtiesConfirmScreen"
        component={EmployeeSpecialtiesConfirmScreen}
        options={{headerShown: false, animation: 'fade_from_bottom'}}
      />
      <NativeStack.Screen
        name="EmployeeWorkingHourScreen"
        component={EmployeeWorkingHourScreen}
        options={{headerTitle: 'Jornada de trabalho'}}
      />
    </NativeStack.Navigator>
  );
}
