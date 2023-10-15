import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EmployeeStackParamList} from '../Stacks/EmployeeStack';

export type EmployeeScreenProps =
  NativeStackScreenProps<EmployeeStackParamList>;

export type EmployeeDetailsScreenProps = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeDetailsScreen'
>;

export type EmployeeProfileUpdateScreenProps = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeProfileUpdateScreen'
>;

export type EmployeeServicesListScreenProps = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeServicesListScreen'
>;

export type EmployeeTimeListScreenProps = NativeStackScreenProps<
  EmployeeStackParamList,
  'EmployeeTimeListScreen'
>;
