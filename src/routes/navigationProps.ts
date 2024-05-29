import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ClientStackParamList} from './Stacks/ClientStack/ClientStack';
import {ScheduleStackParamList} from './Stacks/ScheduleStack/ScheduleStack';
import {UserStackParamList} from './Stacks/UserStack/UserStack';
import {AuthStackParamList} from './Stacks/AuthStack/AuthStack';
import {AdminParamList} from './Stacks/AdminStack/AdminStack';
import {CatalogStackParamList} from './Stacks/CatalogStack/CatalogStack';
import {WorkingHourStackParamList} from './Stacks/WorkingHourStack/WorkingHourStack';
import {EmployeeStackParamList} from './Stacks/EmployeeStack/EmployeeStack';
import {AppointmentStackParamList} from './Stacks/AppointmentStack/AppointmentStack';

export type AuthStackProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type ClientStackProps<RouteName extends keyof ClientStackParamList> =
  NativeStackScreenProps<ClientStackParamList, RouteName>;

export type AdminStackProps<RouteName extends keyof AdminParamList> =
  NativeStackScreenProps<AdminParamList, RouteName>;

export type AppointmentStackProps<
  RouteName extends keyof AppointmentStackParamList,
> = NativeStackScreenProps<AppointmentStackParamList, RouteName>;

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
