import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeCreateScreen,
  EmployeeListScreen,
  EmployeeDetailsScreen,
  EmployeeProfileUpdateScreen,
  EmployeeTimeListScreen,
  EmployeeServicesListScreen,
} from '@screens';

import {ProfileResponse} from '@domain';
import {defaultOptions} from '../screenOptions';

export type EmployeeStackParamList = {
  EmployeeListScreen: undefined;
  EmployeeDetailsScreen: {profile: ProfileResponse};
  EmployeeCreateScreen: {profile: ProfileResponse};
  EmployeeProfileUpdateScreen: {profile: ProfileResponse};
  EmployeeTimeListScreen: {
    employeeId: string;
    workingHourId: string;
  };
  EmployeeServicesListScreen: {
    employeeId?: string;
    services?: any[];
  };
};

const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

export function EmployeeStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{...defaultOptions, headerShown: true}}>
      <NativeStack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={{
          headerTitle: 'Funcionários',
        }}
      />
      <NativeStack.Screen
        name="EmployeeDetailsScreen"
        component={EmployeeDetailsScreen}
        options={({route}) => ({
          animation: 'slide_from_right',
          headerTitle: route.params.profile.name,
        })}
      />
      <NativeStack.Screen
        name="EmployeeCreateScreen"
        component={EmployeeCreateScreen}
        options={{
          headerTitle: 'Novo funcionário',
        }}
      />
      <NativeStack.Screen
        name="EmployeeProfileUpdateScreen"
        component={EmployeeProfileUpdateScreen}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Dados pessoais',
        }}
      />
      <NativeStack.Screen
        name="EmployeeTimeListScreen"
        component={EmployeeTimeListScreen}
        options={{
          headerTitle: 'Horários',
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen
        name="EmployeeServicesListScreen"
        component={EmployeeServicesListScreen}
        options={{
          headerTitle: 'Serviços',
          animation: 'slide_from_right',
        }}
      />
    </NativeStack.Navigator>
  );
}
