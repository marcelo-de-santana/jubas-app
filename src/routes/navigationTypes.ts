import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './Stacks/AppStack';
import {BusinessManagementParamList} from './Stacks/BusinessManagementStack';
import {ScheduleStackParamList} from './Stacks/ScheduleStack';
import {UserStackParamList} from './Stacks/UserStack';
import {AuthStackParamList} from './Stacks/AuthStack';

export type AuthStackProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type BusinessManagementStackProps<
  RouteName extends keyof BusinessManagementParamList,
> = NativeStackScreenProps<BusinessManagementParamList, RouteName>;

export type UserStackProps<RouteName extends keyof UserStackParamList> =
  NativeStackScreenProps<UserStackParamList, RouteName>;

export type ScheduleStackProps<RouteName extends keyof ScheduleStackParamList> =
  NativeStackScreenProps<ScheduleStackParamList, RouteName>;
