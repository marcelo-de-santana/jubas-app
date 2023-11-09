import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeCreateScreen,
  EmployeeListScreen,
  EmployeeDetailsScreen,
  EmployeeProfileUpdateScreen,
  EmployeeTimeListScreen,
  EmployeeServicesListScreen,
} from '@screens';

import {ProfileResponse, WorkingHoursResponse} from '@domain';
import {defaultThemeOptions} from '@styles';

export type EmployeeStackParamList = {
  EmployeeListScreen: undefined;
  EmployeeDetailsScreen: {profile: ProfileResponse};
  EmployeeCreateScreen: {profile: ProfileResponse};
  EmployeeProfileUpdateScreen: {profile?: ProfileResponse};
  EmployeeTimeListScreen: {
    employeeId?: string;
    workingHour?: WorkingHoursResponse;
  };
  EmployeeServicesListScreen: {
    employeeId?: string;
    services?: any[];
  };
};

const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

export function EmployeeStack() {
  return (
    <NativeStack.Navigator screenOptions={defaultThemeOptions}>
      <NativeStack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={{
          headerTitle: 'Funcionários',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="EmployeeDetailsScreen"
        component={EmployeeDetailsScreen}
        options={({route}) => ({
          headerTitle: route.params.profile.name,
          headerShown: true,
        })}
      />
      <NativeStack.Screen
        name="EmployeeCreateScreen"
        component={EmployeeCreateScreen}
        options={{
          headerTitle: 'Novo funcionário',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="EmployeeProfileUpdateScreen"
        component={EmployeeProfileUpdateScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="EmployeeTimeListScreen"
        component={EmployeeTimeListScreen}
        options={{
          headerTitle: 'Horários',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="EmployeeServicesListScreen"
        component={EmployeeServicesListScreen}
        options={{
          headerTitle: 'Serviços',
          headerShown: true,
        }}
      />
    </NativeStack.Navigator>
  );
}
