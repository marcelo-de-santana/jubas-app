import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmployeeListScreen,
  EmployeeServiceListScreen,
  EmployeeTimeListScreen,
} from '@screens';

import {MinimaProfilelResponseDTO} from '@repositories';

export type EmployeeStackParamList = {
  EmployeeListScreen: undefined;
  EmployeeServiceListScreen: undefined;
  EmployeeTimeListScreen: {profile: MinimaProfilelResponseDTO};
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
        name="EmployeeServiceListScreen"
        component={EmployeeServiceListScreen}
        options={{
          headerTitle: 'Serviços',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen
        name="EmployeeTimeListScreen"
        component={EmployeeTimeListScreen}
        options={({route}) => ({
          headerTitle: route.params.profile.name,
          headerShown: true,
          animation: 'slide_from_right',
        })}
      />
    </NativeStack.Navigator>
  );
}
