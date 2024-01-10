import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './Stacks/AppStack';
import {BusinessManagementParamList} from './Stacks/BusinessManagementStack';
import {EmployeeStackParamList} from './Stacks/EmployeeStack';
import {UserStackParamList} from './Stacks/UserStack';
import {AuthStackParamList} from './Stacks/AuthStack';

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type EmployeeScreenProps<
  RouteName extends keyof EmployeeStackParamList,
> = NativeStackScreenProps<EmployeeStackParamList, RouteName>;

export type BusinessManagementStackProps<
  RouteName extends keyof BusinessManagementParamList,
> = NativeStackScreenProps<BusinessManagementParamList, RouteName>;

export type UserStackProps<RouteName extends keyof UserStackParamList> =
  NativeStackScreenProps<UserStackParamList, RouteName>;
