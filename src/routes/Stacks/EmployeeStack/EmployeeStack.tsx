import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeCreateScreen,
  EmployeeListScreen,
  EmployeeSpecialtiesScreen,
  EmployeeWorkingHourScreen,
} from '@screens';
import {HeaderRight} from './components/HeaderRight';
import {EmployeeResponse} from '@domain';
import {defaultOptions} from '../../screenOptions';

export type EmployeeStackParamList = {
  EmployeeCreateScreen: undefined;
  EmployeeListScreen: undefined;
  EmployeeUpdateScreen: undefined;
  EmployeeSpecialtiesScreen: {employee: EmployeeResponse};
  EmployeeWorkingHourScreen?: {workingHourId: string};
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
          headerRight: HeaderRight,
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
    </NativeStack.Navigator>
  );
}
