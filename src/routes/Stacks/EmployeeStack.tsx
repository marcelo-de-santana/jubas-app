import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeListScreen,
  EmployeeDetailsScreen,
  EmployeeProfileUpdateScreen,
  EmployeeTimeListScreen,
  EmployeeServicesListScreen,
} from '@screens';

import {ProfileResponseDTO, WorkingHoursResponseDTO} from '@repositories';
import {colorRegistry} from '@styles';

export type EmployeeStackParamList = {
  EmployeeListScreen: undefined;
  EmployeeDetailsScreen: {profile: ProfileResponseDTO};
  EmployeeProfileUpdateScreen: {profile: ProfileResponseDTO};
  EmployeeTimeListScreen: {
    employeeId: string;
    workingHours: WorkingHoursResponseDTO;
  };
  EmployeeServicesListScreen: {
    employeeId: string;
    services: any;
  };
};

const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

export function EmployeeStack() {
  return (
    <NativeStack.Navigator
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
