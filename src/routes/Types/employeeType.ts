import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EmployeeStackParamList} from '../Stacks/EmployeeStack';

export type EmployeeScreenProps<RouteName extends keyof EmployeeStackParamList> =
  NativeStackScreenProps<EmployeeStackParamList, RouteName>;

