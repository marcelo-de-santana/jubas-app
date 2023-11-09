import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParamList} from '../Stacks/UserStack';

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
