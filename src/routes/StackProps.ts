import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack';
import {UserStackParamList} from './UserStack';
import {EmployeeStackParamList} from './EmployeeStack';

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type UserScreenProps = NativeStackScreenProps<UserStackParamList>;

export type UserProfileProps = NativeStackScreenProps<
  UserStackParamList,
  'UserProfileScreen'
>;

export type UserProfileUpdateScreenProps = NativeStackScreenProps<
  UserStackParamList,
  'UserProfileUpdateScreen'
>;

export type UserUpdateScreenProps = NativeStackScreenProps<
  UserStackParamList,
  'UserUpdateScreen'
>;

export type UserProfileCreateScreenProps = NativeStackScreenProps<
  UserStackParamList,
  'UserProfileCreateScreen'
>;

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
