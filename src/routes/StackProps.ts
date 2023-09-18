import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack';
import {UserStackParamList} from './UserStack';

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