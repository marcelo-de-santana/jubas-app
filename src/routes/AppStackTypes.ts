import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "./AppStack";

export type AppStackProps = NativeStackScreenProps<AppStackParamList>;

export type UserProfileProps = NativeStackScreenProps<AppStackParamList, 'UserProfileScreen'>;