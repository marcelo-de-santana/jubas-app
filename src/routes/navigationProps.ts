import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './Stacks/AppStack/AppStack';
import {ScheduleStackParamList} from './Stacks/ScheduleStack/ScheduleStack';
import {UserStackParamList} from './Stacks/UserStack/UserStack';
import {AuthStackParamList} from './Stacks/AuthStack/AuthStack';
import {BusinessManagementParamList} from './Stacks/BusinessManagementStack/BusinessManagementStack';
import {CatalogStackParamList} from './Stacks/CatalogStack/CatalogStack';
import {WorkingHourStackParamList} from './Stacks/WorkingHourStack/WorkingHourStack';
import {EmployeeStackParamList} from './Stacks/EmployeeStack/EmployeeStack';

export type AuthStackProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type BusinessManagementStackProps<
  RouteName extends keyof BusinessManagementParamList,
> = NativeStackScreenProps<BusinessManagementParamList, RouteName>;

export type UserStackProps<RouteName extends keyof UserStackParamList> =
  NativeStackScreenProps<UserStackParamList, RouteName>;

export type EmployeeStackProps<RouteName extends keyof EmployeeStackParamList> =
  NativeStackScreenProps<EmployeeStackParamList, RouteName>;

export type ScheduleStackProps<RouteName extends keyof ScheduleStackParamList> =
  NativeStackScreenProps<ScheduleStackParamList, RouteName>;

export type CatalogStackProps<RouteName extends keyof CatalogStackParamList> =
  NativeStackScreenProps<CatalogStackParamList, RouteName>;

export type WorkingHourStackProps<
  RouteName extends keyof WorkingHourStackParamList,
> = NativeStackScreenProps<WorkingHourStackParamList, RouteName>;
