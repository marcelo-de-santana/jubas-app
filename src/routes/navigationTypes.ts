import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack';
import {
  AuthStackParamList,
} from './Stacks';
import {BusinessManagementParamList} from './BusinessManagementStack';
import { EmployeeStackParamList } from './EmployeeStack';
import { UserStackParamList } from './UserStack';

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type EmployeeScreenProps<
  RouteName extends keyof EmployeeStackParamList,
> = NativeStackScreenProps<EmployeeStackParamList, RouteName>;

export type BusinessManagementStackProps<
  RouteName extends keyof BusinessManagementParamList,
> = NativeStackScreenProps<BusinessManagementParamList>;

export type UserStackProps<RouteName extends keyof UserStackParamList> =
  NativeStackScreenProps<UserStackParamList>;
