import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeListScreen,
  EmployeeDetailsScreen,
  EmployeeProfileUpdateScreen,
  EmployeeTimeListScreen,
  EmployeeTimeCreateScreen,
  EmployeeServicesListScreen,
  EmployeeProfileCreateScreen,
} from '@screens';

import {EmployeeResponseDTO, MinimaProfilelResponseDTO} from '@repositories';

export type EmployeeStackParamList = {
  EmployeeListScreen: undefined;
  EmployeeDetailsScreen: {employee: EmployeeResponseDTO};
  EmployeeProfileCreateScreen: undefined;
  EmployeeProfileUpdateScreen: {profile: MinimaProfilelResponseDTO};
  EmployeeTimeCreateScreen: undefined;
  EmployeeTimeListScreen: {employee: EmployeeResponseDTO};
  EmployeeServicesListScreen: {employee: EmployeeResponseDTO};
};

const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

export function EmployeeStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#3C4659',
        headerTitleAlign: 'center',
      }}>
      <NativeStack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={{headerTitle: 'Funcionários', headerShown: true}}
      />
      <NativeStack.Screen
        name="EmployeeDetailsScreen"
        component={EmployeeDetailsScreen}
        options={({route}) => ({
          headerTitle: route.params.employee.profile.name,
          headerShown: true,
          animation: 'slide_from_right',
        })}
      />
      <NativeStack.Screen
        name="EmployeeProfileCreateScreen"
        component={EmployeeProfileCreateScreen}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="EmployeeProfileUpdateScreen"
        component={EmployeeProfileUpdateScreen}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="EmployeeTimeCreateScreen"
        component={EmployeeTimeCreateScreen}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="EmployeeTimeListScreen"
        component={EmployeeTimeListScreen}
        options={{
          headerTitle: 'Horários',
          animation: 'slide_from_right',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="EmployeeServicesListScreen"
        component={EmployeeServicesListScreen}
      />
    </NativeStack.Navigator>
  );
}
