import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EmployeeList} from '@screens';

export type EmployeeStackParamList = {
  EmployeeList: undefined;
};

const NativeStack = createNativeStackNavigator<EmployeeStackParamList>();

export function EmployeeStack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="EmployeeList" component={EmployeeList} />
    </NativeStack.Navigator>
  );
}
